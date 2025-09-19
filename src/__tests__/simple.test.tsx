// Testes básicos seguindo a documentação oficial do Jest
// https://jestjs.io/

describe('Basic Math Tests', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
  });

  test('subtracts 5 - 3 to equal 2', () => {
    expect(5 - 3).toBe(2);
  });

  test('multiplies 4 * 3 to equal 12', () => {
    expect(4 * 3).toBe(12);
  });

  test('divides 10 / 2 to equal 5', () => {
    expect(10 / 2).toBe(5);
  });
});

describe('String Tests', () => {
  test('concatenates strings correctly', () => {
    expect('Hello' + ' ' + 'World').toBe('Hello World');
  });

  test('checks string length', () => {
    const str = 'Make Store';
    expect(str).toHaveLength(10);
  });

  test('checks if string contains substring', () => {
    const str = 'Make Store - CI + CD via GitHub Actions';
    expect(str).toContain('GitHub Actions');
  });
});

describe('Array Tests', () => {
  test('checks array length', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(arr).toHaveLength(5);
  });

  test('checks if array contains value', () => {
    const arr = ['apple', 'banana', 'orange'];
    expect(arr).toContain('banana');
  });

  test('checks array methods', () => {
    const arr = [1, 2, 3];
    expect(arr.map(x => x * 2)).toEqual([2, 4, 6]);
  });
});

describe('Object Tests', () => {
  test('checks object properties', () => {
    const obj = { name: 'Make Store', version: '0.1.0' };
    expect(obj).toHaveProperty('name', 'Make Store');
    expect(obj).toHaveProperty('version', '0.1.0');
  });

  test('checks object equality', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 2 };
    expect(obj1).toEqual(obj2);
  });
});

describe('Boolean Tests', () => {
  test('checks truthy values', () => {
    expect(true).toBeTruthy();
    expect(1).toBeTruthy();
    expect('hello').toBeTruthy();
  });

  test('checks falsy values', () => {
    expect(false).toBeFalsy();
    expect(0).toBeFalsy();
    expect('').toBeFalsy();
    expect(null).toBeFalsy();
    expect(undefined).toBeFalsy();
  });
});