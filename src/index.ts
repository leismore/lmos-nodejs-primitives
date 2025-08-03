/**
 * Define examples of each primitive value in JavaScript
 */

import {EOL} from 'os';

// Null
const NULL = null;

// Undefined
const UNDEFINED = undefined;

// Boolean
const TRUE  = true;
const FALSE = false;

// Number
const INTEGER          =  42;
const INTEGER_NEGATIVE = -42;
const FLOAT            =  3.14;
const FLOAT_NEGATIVE   = -3.14;

// BigInt
const BIGINT          = BigInt(Number.MAX_SAFE_INTEGER) + BigInt(1);
const BIGINT_NEGATIVE = BigInt(Number.MIN_SAFE_INTEGER) - BigInt(1);

// String
const STRING           = 'Hello, World!';
const STRING_EMPTY     = '';
const STRING_MULTILINE = (
    'This is a string'           + EOL +
    'that spans multiple lines.' + EOL +
    'It includes line breaks.'   + EOL
);

// Symbol
const SYMBOL = Symbol();

// Export all defined primitive values
export {
    NULL    ,    UNDEFINED        ,
    TRUE    ,    FALSE            ,
    INTEGER ,    INTEGER_NEGATIVE ,
    FLOAT   ,    FLOAT_NEGATIVE   ,
    BIGINT  ,    BIGINT_NEGATIVE  ,
    STRING  ,    STRING_EMPTY     ,    STRING_MULTILINE,
    SYMBOL
};
