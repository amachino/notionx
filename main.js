#! /usr/bin/env node

import * as fs from "fs";
import * as path from "path";
import { program } from "commander";
import { Client } from "@notionhq/client";
import { markdownToBlocks } from "@tryfabric/martian";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

function main() {
  if (!process.env.NOTION_TOKEN) {
    console.log("set your NOTION_TOKEN to use notionx");
    return;
  }

  program
    .command("import")
    .description("import document to database")
    .argument("<file_path>", "document to import")
    .option(
      "-d, --database-id <database_id>",
      "database id",
      process.env.NOTION_DATABASE_ID
    )
    .option("-t, --title <title>", "document title")
    .action(handleImport);

  program
    .command("insert")
    .description("insert document to block")
    .argument("<file_path>", "document to insert")
    .option("-b, --block-id <block_id>", "parent block id")
    .action(handleInsert);

  program.parse();
}

async function handleImport(filePath, options) {
  try {
    const databaseId = options.databaseId;
    const title = options.title;
    await importDocument(filePath, databaseId, title);
  } catch (err) {
    console.log(err.message);
  }
}

async function handleInsert(filePath, options) {
  try {
    const blockId = options.blockId;
    await insertDocument(filePath, blockId);
  } catch (err) {
    console.log(err.message);
  }
}

async function importDocument(filePath, databaseId, title) {
  title = title ? title : path.basename(filePath);
  const page = await notion.pages.create({
    parent: { database_id: databaseId },
    properties: {
      Name: {
        type: "title",
        title: [{ text: { content: title } }],
      },
    },
  });
  await insertDocument(filePath, page.id);
}

async function insertDocument(filePath, blockId) {
  const SIZE_LIMIT_PER_REQUEST = 100;
  const markdown = await fs.promises.readFile(filePath, "utf8");
  const blocks = markdownToBlocks(markdown);
  const chunks = [];
  while (blocks.length) {
    chunks.push(blocks.splice(0, SIZE_LIMIT_PER_REQUEST));
  }
  for (const chunk of chunks) {
    await notion.blocks.children.append({
      block_id: blockId,
      children: chunk,
    });
  }
}

main();
