import { validate, ValidationResult } from '../main';

describe('validate', () => {
  it('returns a ValidationResult instance', () => {
    expect(validate({ name: 'my name' })).toBeInstanceOf(ValidationResult);
  });
});
