/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var pow = require( '@stdlib/math-base-special-pow' );
var isTypedArrayLike = require( '@stdlib/assert-is-typed-array-like' );
var zeros = require( '@stdlib/array-zeros' );
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var pkg = require( './../package.json' ).name;
var fullLike = require( './../lib' );


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - array length
* @returns {Function} benchmark function
*/
function createBenchmark( len ) {
	var x = zeros( len, 'complex128' );
	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var arr;
		var z;
		var i;

		z = new Complex128( 1.0, 0.0 );

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			arr = fullLike( x, z );
			if ( arr.length !== len ) {
				b.fail( 'unexpected length' );
			}
		}
		b.toc();
		if ( !isTypedArrayLike( arr ) ) {
			b.fail( 'should return a typed array' );
		}
		b.pass( 'benchmark finished' );
		b.end();
	}
}


// MAIN //

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var len;
	var min;
	var max;
	var f;
	var i;

	min = 1; // 10^min
	max = 6; // 10^max

	for ( i = min; i <= max; i++ ) {
		len = pow( 10, i );
		f = createBenchmark( len );
		bench( pkg+':dtype=complex128,len='+len, f );
	}
}

main();
