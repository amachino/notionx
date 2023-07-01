# Mathematical Expressions in LaTeX

## Taylor Series

The Taylor series of a real or complex-valued function $f(x)$ that is infinitely differentiable at a real or complex number $a$ is the power series

$$
f(a) + f'(a)(x - a) + \frac{f''(a)(x - a)^2}{2!} + \frac{f'''(a)(x - a)^3}{3!} + \cdots
$$

In a more compact form, it can be expressed as:

$$
f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!} (x - a)^n
$$

## Gaussian Integral

The Gaussian integral, also known as the Euler–Poisson integral is the integral of the Gaussian function $e^{-x^2}$ over the entire real line. It's named after mathematicians Carl Friedrich Gauss and Siméon Denis Poisson. The integral is:

$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

## Euler's Identity

Euler's identity is a particular case of Euler's formula from complex analysis, which states that for any real number $x$,

$$
e^{ix} = \cos(x) + i\sin(x)
$$

Where $e$ is the base of the natural logarithm, $i$ is the imaginary unit, and $\cos$ and $\sin$ are the trigonometric functions. The special case with $x = \pi$ is Euler's identity:

$$
e^{i\pi} + 1 = 0
$$

## Fourier Transform

The Fourier Transform of a time domain signal $f(t)$ is a frequency domain signal $F(\omega)$ and can be computed as:

$$
F(\omega) = \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt
$$

## Schrödinger Equation

The time-dependent Schrödinger equation in quantum mechanics is:

$$
i\hbar\frac{\partial}{\partial t} \Psi(\mathbf{r},t) = \left[ -\frac{\hbar^2}{2\mu}\nabla^2 + V(\mathbf{r},t) \right] \Psi(\mathbf{r},t)
$$

Where $\Psi(\mathbf{r},t)$ is the wave function of the system, $i$ is the imaginary unit, $\hbar$ is the reduced Planck constant, $\mu$ is the reduced mass of the system, $\nabla^2$ is the Laplacian operator, and $V(\mathbf{r},t)$ is the potential energy function of the system.
