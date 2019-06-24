export class Validator {
  value: object;

  constructor(value: object) {
    this.value = value;
  }
}

export function validate(value: object) {
  return new Validator(value)
}
