/*
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

import signatures = require( './index' );


// TESTS //

// The function returns a list of signatures...
{
	const dt = [ 'float64', 'float32' ];

	signatures( dt, dt ); // $ExpectType ArrayLike<string | number>
	signatures( dt, dt, {} ); // $ExpectType ArrayLike<string | number>
	signatures( dt, dt, { 'enums': false } ); // $ExpectType ArrayLike<string | number>
	signatures( dt, dt, { 'enums': true } ); // $ExpectType ArrayLike<string | number>
}

// The compiler throws an error if provided a first argument which is not an array-like object...
{
	const dt = [ 'float64', 'float32' ];

	signatures( 10, dt ); // $ExpectError
	signatures( true, dt ); // $ExpectError
	signatures( false, dt ); // $ExpectError
	signatures( null, dt ); // $ExpectError
	signatures( undefined, dt ); // $ExpectError
	signatures( {}, dt ); // $ExpectError

	signatures( 10, dt, {} ); // $ExpectError
	signatures( true, dt, {} ); // $ExpectError
	signatures( false, dt, {} ); // $ExpectError
	signatures( null, dt, {} ); // $ExpectError
	signatures( undefined, dt, {} ); // $ExpectError
	signatures( {}, dt, {} ); // $ExpectError
}

// The compiler throws an error if provided a second argument which is not an array-like object...
{
	const dt = [ 'float64', 'float32' ];

	signatures( dt, 10 ); // $ExpectError
	signatures( dt, true ); // $ExpectError
	signatures( dt, false ); // $ExpectError
	signatures( dt, null ); // $ExpectError
	signatures( dt, undefined ); // $ExpectError
	signatures( dt, {} ); // $ExpectError

	signatures( dt, 10, {} ); // $ExpectError
	signatures( dt, true, {} ); // $ExpectError
	signatures( dt, false, {} ); // $ExpectError
	signatures( dt, null, {} ); // $ExpectError
	signatures( dt, undefined, {} ); // $ExpectError
	signatures( dt, {}, {} ); // $ExpectError
}

// The compiler throws an error if provided a third argument which is not an options object...
{
	const dt = [ 'float64', 'float32' ];

	signatures( dt, dt, 10 ); // $ExpectError
	signatures( dt, dt, '10' ); // $ExpectError
	signatures( dt, dt, true ); // $ExpectError
	signatures( dt, dt, false ); // $ExpectError
	signatures( dt, dt, null ); // $ExpectError
}

// The compiler throws an error if provided an `enums` option which is not a boolean...
{
	const dt = [ 'float64', 'float32' ];

	signatures( dt, dt, { 'enums': 10 } ); // $ExpectError
	signatures( dt, dt, { 'enums': '10' } ); // $ExpectError
	signatures( dt, dt, { 'enums': null } ); // $ExpectError
	signatures( dt, dt, { 'enums': {} } ); // $ExpectError
	signatures( dt, dt, { 'enums': [] } ); // $ExpectError
	signatures( dt, dt, { 'enums': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const dt = [ 'float64', 'float32' ];

	signatures(); // $ExpectError
	signatures( dt ); // $ExpectError
	signatures( dt, dt, dt, dt ); // $ExpectError
	signatures( dt, dt, {}, {} ); // $ExpectError
}
