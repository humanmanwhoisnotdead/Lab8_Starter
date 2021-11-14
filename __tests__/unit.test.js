// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// isPhoneNumber();
test('test emptyString', () => {
    expect(functions.isPhoneNumber('')).toBe(false);
  });
test('test tooShort', () => {
    expect(functions.isPhoneNumber('35-3115')).toBe(false);
});
test('test with ()', () => {
    expect(functions.isPhoneNumber('(313)-235-3115')).toBe(true);
});
test('test without ()', () => {
    expect(functions.isPhoneNumber('612-135-3115')).toBe(true);
});

// isEmail()
test('emptyString', () => {
    expect(functions.isEmail('')).toBe(false);
});
test('no@', () => {
    expect(functions.isEmail('michealSmithgmail.com')).toBe(false);
});
test('gmail', () => {
    expect(functions.isEmail('michealSmith@gmail.com')).toBe(true);
});
test('hotmail', () => {
    expect(functions.isEmail('michealSmith@hotmail.com')).toBe(true);
});

// isStrongPassword()
test('toLong', () => {
    expect(functions.isStrongPassword('dkfEF90DK20dkDSjI9dkj2DF9')).toBe(false);
});
test('invalidChar', () => {
    expect(functions.isStrongPassword('a2df$ddsDF')).toBe(false);
});
test('allLowerCase', () => {
    expect(functions.isStrongPassword('abcd')).toBe(true);
});
test('underScoresAndNumbers', () => {
    expect(functions.isStrongPassword('Kab_32Dd')).toBe(true);
});

// isDate()
test('emptyString', () => {
    expect(functions.isDate('')).toBe(false);
});
test('middleToHigh', () => {
    expect(functions.isDate('13/123/2012')).toBe(false);
});
test('first1Digit', () => {
    expect(functions.isDate('1/11/0003')).toBe(true);
});
test('first2Digit', () => {
    expect(functions.isDate('1/51/0003')).toBe(true);
});

// isHexColor()
test('emptyString', () => {
    expect(functions.isHexColor('')).toBe(false);
});
test('pastHex', () => {
    expect(functions.isHexColor('3g1')).toBe(false);
});
test('3digitsMan', () => {
    expect(functions.isHexColor('#fff')).toBe(true);
});
test('6digitsMax', () => {
    expect(functions.isHexColor('#000000')).toBe(true);
});
// TODO - Part 2