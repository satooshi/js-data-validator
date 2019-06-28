import Validator from './validator';

/**
 * Validation result.
 */
export default class ValidationResult {
  validator: Validator;
  errors: object;

  constructor(validator: Validator) {
    this.validator = validator;
  }

  /**
   * @returns {boolean} true if the data set is valid, false otherwise.
   */
  isValid(): boolean {
    const errors = this.validator.validate(); // TODO: this should be object type
    return !errors.hasErrors();
  }
}
