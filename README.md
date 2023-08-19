<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# fullLike

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create a filled array having the same length and data type as a provided array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/array-full-like
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var fullLike = require( '@stdlib/array-full-like' );
```

#### fullLike( x, value\[, dtype] )

Creates a filled array having the same length and data type as a provided array `x`.

```javascript
var x = [ 1, 2, 3, 4, 5 ];

var arr = fullLike( x, 1 );
// returns [ 1, 1, 1, 1, 1 ]
```

The function supports the following data types:

-   `float64`: double-precision floating-point numbers (IEEE 754)
-   `float32`: single-precision floating-point numbers (IEEE 754)
-   `complex128`: double-precision complex floating-point numbers
-   `complex64`: single-precision complex floating-point numbers
-   `int32`: 32-bit two's complement signed integers
-   `uint32`: 32-bit unsigned integers
-   `int16`: 16-bit two's complement signed integers
-   `uint16`: 16-bit unsigned integers
-   `int8`: 8-bit two's complement signed integers
-   `uint8`: 8-bit unsigned integers
-   `uint8c`: 8-bit unsigned integers clamped to `0-255`
-   `generic`: generic JavaScript values

By default, the output array data type is inferred from the provided array `x`. To return an array having a different data type, provide a `dtype` argument.

```javascript
var x = [ 1, 1 ];

var arr = fullLike( x, 1, 'int32' );
// returns <Int32Array>[ 1, 1 ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If provided a number and the output array data type is a complex number data type, the function returns a complex number array where each element has a real component whose value equals the provided fill value and where each element has an imaginary component equal to `0`.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var dtypes = require( '@stdlib/array-dtypes' );
var zeros = require( '@stdlib/array-zeros' );
var fullLike = require( '@stdlib/array-full-like' );

// Create a zero-filled array:
var x = zeros( 4, 'complex128' );

// Get a list of array data types:
var dt = dtypes();

// Generate filled arrays...
var y;
var i;
for ( i = 0; i < dt.length; i++ ) {
    y = fullLike( x, 1.0, dt[ i ] );
    console.log( y );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-full-like.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-full-like

[test-image]: https://github.com/stdlib-js/array-full-like/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/array-full-like/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-full-like/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-full-like?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-full-like.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-full-like/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-full-like/tree/deno
[umd-url]: https://github.com/stdlib-js/array-full-like/tree/umd
[esm-url]: https://github.com/stdlib-js/array-full-like/tree/esm
[branches-url]: https://github.com/stdlib-js/array-full-like/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-full-like/main/LICENSE

</section>

<!-- /.links -->
