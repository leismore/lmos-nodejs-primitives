import assert from 'node:assert/strict';
import test   from 'node:test';
import {EOL}  from 'os';
import {
    NULL        ,  UNDEFINED            ,
    TRUE        ,  FALSE                ,
    INTEGER     ,  INTEGER_NEGATIVE     ,
    FLOAT       ,  FLOAT_NEGATIVE       ,
    ZERO        ,  ZERO_NEGATIVE        ,
    BIGINT      ,  BIGINT_NEGATIVE      ,
    BIGINT_ZERO ,  BIGINT_ZERO_NEGATIVE ,
    STRING      ,  STRING_EMPTY         ,  STRING_MULTILINE,
    SYMBOL
} from '../src/index.js';

// Null
test('NULL is null', () => {
    assert.strictEqual(NULL, null);
});

// Undefined
test('UNDEFINED is undefined', () => {
    assert.strictEqual(UNDEFINED, undefined);
});

// Boolean
test('BOOLEAN values', async (t) => {

    await t.test('TRUE is true', () => {
        assert.strictEqual(TRUE, true);
    });

    await t.test('FALSE is false', () => {
        assert.strictEqual(FALSE, false);
    });

});

// Number
test('NUMBER values', async (t) => {

    await t.test('INTEGER is 42', () => {
        assert.strictEqual(INTEGER, 42);
    });

    await t.test('INTEGER_NEGATIVE is -42', () => {
        assert.strictEqual(INTEGER_NEGATIVE, -42);
    });

    await t.test('FLOAT is 3.14', () => {
        assert.strictEqual(FLOAT, 3.14);
    });

    await t.test('FLOAT_NEGATIVE is -3.14', () => {
        assert.strictEqual(FLOAT_NEGATIVE, -3.14);
    });

    await t.test('ZERO is 0', () => {
        assert.strictEqual(ZERO, 0);
    });

    await t.test('ZERO_NEGATIVE is -0', () => {
        assert.strictEqual(ZERO_NEGATIVE, -0);
    });

});

// BigInt
test('BigInt values', async (t) => {

    await t.test('BIGINT is MAX_SAFE_INTEGER +1', () => {
        assert.strictEqual(BIGINT, BigInt(Number.MAX_SAFE_INTEGER) + BigInt(1));
    });

    await t.test('BIGINT_NEGATIVE is MIN_SAFE_INTEGER -1', () => {
        assert.strictEqual(BIGINT_NEGATIVE, BigInt(Number.MIN_SAFE_INTEGER) - BigInt(1));
    });

    await t.test('BIGINT_ZERO is 0n', () => {
        assert.strictEqual(BIGINT_ZERO, BigInt(0));
    });

    await t.test('BIGINT_ZERO_NEGATIVE is -0n', () => {
        assert.strictEqual(BIGINT_ZERO_NEGATIVE, BigInt(-0));
    });

});

// String
test('STRING values', async (t) => {

    await t.test('STRING is "Hello, World!"', () => {
        assert.strictEqual(STRING, 'Hello, World!');
    });

    await t.test('STRING_EMPTY is an empty string', () => {
        assert.strictEqual(STRING_EMPTY, '');
    });

    await t.test('STRING_MULTILINE spans multiple lines', () => {
        const expected = (
            'This is a string'           + EOL +
            'that spans multiple lines.' + EOL +
            'It includes line breaks.'   + EOL
        );
        assert.strictEqual(STRING_MULTILINE, expected);
    });

});

// Symbol
test('SYMBOL is a unique symbol', () => {
    assert.ok(typeof SYMBOL === 'symbol');
    assert.notStrictEqual(SYMBOL, Symbol());
});
