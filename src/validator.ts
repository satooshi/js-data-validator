/**
 * Validator.
 */
export default class Validator<T extends { [key: string]: unknown }, C extends { [key: string]: unknown }> {
  private dataSet: T;
  private constraints: C;
  errors: { [key: string]: unknown };

  constructor(dataSet: T, constraints: C) {
    this.dataSet = dataSet;
    this.constraints = constraints;
    this.errors = {};
  }

  /** Validates the data set. */
  isValid(): boolean {
    this.errors = this.runValidation(this.dataSet, this.constraints)

    return Object.keys(this.errors).length === 0;
  }

  /** Returns if the value is empty such like null, undefined, false, '', [], {} */
  private isEmpty(value: unknown): boolean {
    if (value == null) {
      // null or undefined
      return true;
    }

    switch(typeof value) {
      case 'boolean': {
        return value === false;
      }
      case 'string': {
        return value.length === 0;
      }
      case 'number': {
        return false;
      }
      case 'object': {
        if (Array.isArray(value)) {
          return value.length === 0;
        }

        const hasOwnProperty = Object.prototype.hasOwnProperty;
        for (const key in value) {
          if (hasOwnProperty.call(value, key)) {
            return false;
          }
        }
        return true;
      }
    }

    // function or something reach here
    return false;
  }

  /** Validates values according to the given constraints */
  private runValidation(values: object, constraints: object, path = ''): { [key: string]: unknown } {
    // const values = {
    //   a: 1,
    //   b: 'string',
    //   c: true,
    //   d: 2.2,
    //   e: [1, 2, 3],
    //   f: { a: 1, b: [], c: {} },
    //   g: null,
    //   h: undefined,
    // };

    const errors = {};

    Object.keys(values).forEach((key) => {
      const value = values && values[key]
      const valueConstraints = constraints && constraints[key]
      const isEmpty = this.isEmpty(value);
      const currentPath = `${path}.${key}`

      if (isEmpty && valueConstraints == null) {
        // ignore validation since it's non-value and there's no constraints
        return;
      }

      if (typeof value === 'object' && !Array.isArray(value)) {
        // nested value
        const nestedErrors = this.runValidation(value, valueConstraints, currentPath);
        if (Object.keys(nestedErrors).length > 0) {
          errors[key] = nestedErrors;
        }
        return;
      } else {
        if (valueConstraints) {
          if (valueConstraints['required'] && isEmpty) {
            errors[key] = 'required'
            return;
          }
          // TODO: Check the constraints
          // min, max
          // minLength, maxLength
          // regex
        }
      }

    });

    return errors;
  }
}
