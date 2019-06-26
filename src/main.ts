
/**
 * Data set validator.
 */
export class Validator {
  dataSet: object;

  constructor(dataSet: object) {
    this.dataSet = dataSet;
  }

  /**
   * Validates the data set.
   *
   * @returns {Array<ValidationError>}
   */
  validate(): Array<ValidationError> {
    // TODO Travarse the data set
    return []; // TODO returns Array<ValidationError>
  }

  validateValue(value) {}
}

export class ValidationError {}

/**
 * The class contains current validation information.
 */
export class ValitionContext {
  dataSet: object;
  errors: Array<ValidationError>;

  constructor(dataSet: object) {
    this.dataSet = dataSet;
  }
}

/**
 * Validation result.
 */
export class ValidationResult {
  validator: Validator;

  constructor(validator: Validator) {
    this.validator = validator;
  }

  /**
   * @returns {boolean} true if the data set is valid, false otherwise.
   */
  isValid(): boolean {
    const errors = this.validator.validate();
    return errors.length === 0
  }
}

/**
 * Exposed function to validate data set.
 *
 * @param dataSet {object} The data set to validate.
 * @returns {ValidationResult}
 */
export function validate(dataSet: object): ValidationResult {
  return new ValidationResult(new Validator(dataSet));
}
