import Validator from '../validator';

describe('#isValid()', () => {
  it('returns true', () => {
    const validator = new Validator({ name: 'my name' }, {});
    expect(validator.isValid()).toBe(true);
  });

  it('returns false', () => {
    const validator = new Validator({ name: '' }, { name: { required: true } });
    expect(validator.isValid()).toBe(false);
    expect(validator.errors['name']).toEqual('required');
  });
});
