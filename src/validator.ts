import ValidationErrors from './validation_errors';

/**
 * Data set validator.
 */
export default class Validator {
  dataSet: object;
  constraints: object;

  constructor(dataSet: object, constraints: object) {
    this.dataSet = dataSet;
    this.constraints = constraints;
  }

  /**
   * Validates the data set.
   *
   * @returns {ValidationErrors}
   */
  validate(): ValidationErrors {
    // TODO Travarse the data set
    return new ValidationErrors();
  }
}
