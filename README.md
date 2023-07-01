# notionx

`notionx` is a Command Line Interface (CLI) tool that allows you to import markdown files, including those containing LaTeX math equations, into Notion.

## Prerequisites

- [Node.js](https://nodejs.org/)

## Installation

To install this tool, run the following command:

```bash
npm install -g amachino/notionx
```

After installation, `notionx` will be available as a command.

## Setup

This tool requires a Notion integration token to work. You can get one by following the instructions [here](https://developers.notion.com/docs/getting-started).

Set your Notion integration token in your environment.

```bash
export NOTION_TOKEN=your-notion-token
```

You can also set the default database id that `notionx` will import documents into.

```bash
export NOTION_DATABASE_ID=your-notion-database-id
```

## Usage

The `notionx` command provides two subcommands: `import` and `insert`.

- `import`: Import a document into a Notion database.
- `insert`: Insert a document into an existing block in Notion.

### Example

Assuming you have set `NOTION_TOKEN` and `NOTION_DATABASE_ID`, you can import a markdown file into Notion like this:

```bash
notionx import sample.md
```

### Import a document into a database

The `import` command imports a document into a database.

```bash
notionx import <file_path> -d <database_id> -t <title>
```

Arguments:

- `<file_path>`: The file path to the document you want to import. (_required_)
- `<database_id>`: The id of the database you want to import the document into. If not provided, it defaults to the value of `NOTION_DATABASE_ID`.
- `<title>`: The title of the document. If not provided, it defaults to the filename of `<file_path>`.

### Insert a document into an existing block

The `insert` command inserts a document into an existing block.

```bash
notionx insert <file_path> -b <block_id>
```

Arguments:

- `<file_path>`: The file path to the document you want to insert. (_required_)
- `<block_id>`: The id of the block you want to insert the document into. (_required_)

## License

This project is open-sourced software licensed under the MIT license.

**Disclaimer**: This tool is not officially associated with Notion, and it's not guaranteed to always work with future updates of Notion's API. Use it at your own risk.
