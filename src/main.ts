import Validator from './validator';
import ValidationResult from './validation_result';

/**
 * Exposed function to validate data set.
 *
 * @param dataSet {object} The data set to validate.
 * @returns {ValidationResult}
 */
export default function validate(dataSet: object, constraints: object): ValidationResult {
  return new ValidationResult(new Validator(dataSet, constraints));
}
