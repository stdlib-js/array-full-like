<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# fullLike

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create a filled array having the same length and data type as a provided array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import fullLike from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-full-like@esm/index.mjs';
```

#### fullLike( x, value\[, dtype] )

Creates a filled array having the same length and [data type][@stdlib/array/dtypes] as a provided array `x`.

```javascript
var x = [ 1, 2, 3, 4, 5 ];

var arr = fullLike( x, 1 );
// returns [ 1, 1, 1, 1, 1 ]
```

By default, the output array [data type][@stdlib/array/dtypes] is inferred from the provided array `x`. To return an array having a different [data type][@stdlib/array/dtypes], provide a `dtype` argument.

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

-   If provided a number and the output array [data type][@stdlib/array/dtypes] is a complex number [data type][@stdlib/array/dtypes], the function returns a complex number array where each element has a real component whose value equals the provided fill value and where each element has an imaginary component equal to `0`.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import dtypes from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-dtypes@esm/index.mjs';
import zeros from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-zeros@esm/index.mjs';
import fullLike from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-full-like@esm/index.mjs';

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

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/array-full`][@stdlib/array/full]</span><span class="delimiter">: </span><span class="description">create a filled array having a specified length.</span>
-   <span class="package-name">[`@stdlib/array-ones-like`][@stdlib/array/ones-like]</span><span class="delimiter">: </span><span class="description">create an array filled with ones and having the same length and data type as a provided array.</span>
-   <span class="package-name">[`@stdlib/array-zeros-like`][@stdlib/array/zeros-like]</span><span class="delimiter">: </span><span class="description">create a zero-filled array having the same length and data type as a provided array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-full-like.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-full-like

[test-image]: https://github.com/stdlib-js/array-full-like/actions/workflows/test.yml/badge.svg?branch=v0.3.0
[test-url]: https://github.com/stdlib-js/array-full-like/actions/workflows/test.yml?query=branch:v0.3.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-full-like/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-full-like?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-full-like.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-full-like/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-full-like/tree/deno
[deno-readme]: https://github.com/stdlib-js/array-full-like/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/array-full-like/tree/umd
[umd-readme]: https://github.com/stdlib-js/array-full-like/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/array-full-like/tree/esm
[esm-readme]: https://github.com/stdlib-js/array-full-like/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/array-full-like/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-full-like/main/LICENSE

[@stdlib/array/dtypes]: https://github.com/stdlib-js/array-dtypes/tree/esm

<!-- <related-links> -->

[@stdlib/array/full]: https://github.com/stdlib-js/array-full/tree/esm

[@stdlib/array/ones-like]: https://github.com/stdlib-js/array-ones-like/tree/esm

[@stdlib/array/zeros-like]: https://github.com/stdlib-js/array-zeros-like/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
