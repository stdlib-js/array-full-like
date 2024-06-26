/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import BooleanArray = require( '@stdlib/array-bool' );
import Complex128Array = require( '@stdlib/array-complex128' );
import Complex64Array = require( '@stdlib/array-complex64' );
import Complex128 = require( '@stdlib/complex-float64-ctor' );
import Complex64 = require( '@stdlib/complex-float32-ctor' );
import fullLike = require( './index' );


// TESTS //

// The function returns an array or typed array...
{
	fullLike( [ 0, 0 ], 1 ); // $ExpectType any[]
	fullLike( new Float64Array( [ 0, 0 ] ), 1 ); // $ExpectType Float64Array
	fullLike( new Float32Array( [ 0, 0 ] ), 1 ); // $ExpectType Float32Array
	fullLike( new Complex128Array( [ 0, 0 ] ), 1 ); // $ExpectType Complex128Array
	fullLike( new Complex128Array( [ 0, 0 ] ), new Complex128( 1.0, 1.0 ) ); // $ExpectType Complex128Array
	fullLike( new Complex64Array( [ 0, 0 ] ), 1 ); // $ExpectType Complex64Array
	fullLike( new Complex64Array( [ 0, 0 ] ), new Complex64( 1.0, 1.0 ) ); // $ExpectType Complex64Array
	fullLike( new BooleanArray( [ 0, 0 ] ), true ); // $ExpectType BooleanArray
	fullLike( new Int32Array( [ 0, 0 ] ), 1 ); // $ExpectType Int32Array
	fullLike( new Int16Array( [ 0, 0 ] ), 1 ); // $ExpectType Int16Array
	fullLike( new Int8Array( [ 0, 0 ] ), 1 ); // $ExpectType Int8Array
	fullLike( new Uint32Array( [ 0, 0 ] ), 1 ); // $ExpectType Uint32Array
	fullLike( new Uint16Array( [ 0, 0 ] ), 1 ); // $ExpectType Uint16Array
	fullLike( new Uint8Array( [ 0, 0 ] ), 1 ); // $ExpectType Uint8Array
	fullLike( new Uint8ClampedArray( [ 0, 0 ] ), 1 ); // $ExpectType Uint8ClampedArray

	fullLike( [ 0, 0 ], 1, 'float64' ); // $ExpectType Float64Array
	fullLike( [ 0, 0 ], 1, 'float32' ); // $ExpectType Float32Array
	fullLike( [ 0, 0 ], 1, 'complex128' ); // $ExpectType Complex128Array
	fullLike( [ 0, 0 ], new Complex128( 1.0, 1.0 ), 'complex128' ); // $ExpectType Complex128Array
	fullLike( [ 0, 0 ], 1, 'complex64' ); // $ExpectType Complex64Array
	fullLike( [ 0, 0 ], new Complex64( 1.0, 1.0 ), 'complex64' ); // $ExpectType Complex64Array
	fullLike( [ 0, 0 ], true, 'bool' ); // $ExpectType BooleanArray
	fullLike( [ 0, 0 ], 1, 'int32' ); // $ExpectType Int32Array
	fullLike( [ 0, 0 ], 1, 'int16' ); // $ExpectType Int16Array
	fullLike( [ 0, 0 ], 1, 'int8' ); // $ExpectType Int8Array
	fullLike( [ 0, 0 ], 1, 'uint32' ); // $ExpectType Uint32Array
	fullLike( [ 0, 0 ], 1, 'uint16' ); // $ExpectType Uint16Array
	fullLike( [ 0, 0 ], 1, 'uint8' ); // $ExpectType Uint8Array
	fullLike( [ 0, 0 ], 1, 'uint8c' ); // $ExpectType Uint8ClampedArray
	fullLike( [ 0, 0 ], 1, 'generic' ); // $ExpectType any[]
}

// The compiler throws an error if the function is not provided an array or typed array for the first argument...
{
	fullLike( '5', 1 ); // $ExpectError
	fullLike( 5, 1 ); // $ExpectError
	fullLike( false, 1 ); // $ExpectError
	fullLike( true, 1 ); // $ExpectError
	fullLike( null, 1 ); // $ExpectError
	fullLike( undefined, 1 ); // $ExpectError
	fullLike( {}, 1 ); // $ExpectError
	fullLike( ( x: number ): number => x, 1 ); // $ExpectError

	fullLike( '5', 1, 'float32' ); // $ExpectError
	fullLike( 5, 1, 'float32' ); // $ExpectError
	fullLike( false, 1, 'float32' ); // $ExpectError
	fullLike( true, 1, 'float32' ); // $ExpectError
	fullLike( null, 1, 'float32' ); // $ExpectError
	fullLike( undefined, 1, 'float32' ); // $ExpectError
	fullLike( {}, 1, 'float32' ); // $ExpectError
	fullLike( ( x: number ): number => x, 1, 'float32' ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is an unrecognized/unsupported data type...
{
	fullLike( [ 0, 0 ], 1, '10' ); // $ExpectError
	fullLike( [ 0, 0 ], 1, 10 ); // $ExpectError
	fullLike( [ 0, 0 ], 1, false ); // $ExpectError
	fullLike( [ 0, 0 ], 1, true ); // $ExpectError
	fullLike( [ 0, 0 ], 1, null ); // $ExpectError
	fullLike( [ 0, 0 ], 1, [] ); // $ExpectError
	fullLike( [ 0, 0 ], 1, {} ); // $ExpectError
	fullLike( [ 0, 0 ], 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	fullLike( [ 0, 0 ], 1, 'float64', 1 ); // $ExpectError
}
