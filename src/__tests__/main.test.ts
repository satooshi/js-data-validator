import { validate, Validator } from '../main';

describe('validate', () => {
  it('returns Validate instance', () => {
    expect(validate({ name: 'my name' })).toBeInstanceOf(Validator);
  });
});
