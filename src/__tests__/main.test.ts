import validate from '../main';
import ValidationResult from '../validation_result';

describe('validate()', () => {
  it('returns a ValidationResult instance', () => {
    expect(validate({ name: 'my name' }, {})).toBeInstanceOf(ValidationResult);
  });
});
