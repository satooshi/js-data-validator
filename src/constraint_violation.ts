import Constraint from './constraint';

/**
 * Violation against the constraint.
 */
export default class ConstraintViolation {
  /**
   * Violated constraint.
   */
  constraint: Constraint;
  /**
   * Constraint name like 'NotNull', 'LessThan'
   */
  cause: string;
  /**
   * Violated value.
   */
  invalidValue;

  constructor(constraint: Constraint, invalidValue) {
    this.constraint = constraint;
    this.invalidValue= invalidValue;
  }
}
