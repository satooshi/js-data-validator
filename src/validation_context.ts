/**
 * The class contains current validation information.
 */
export class ValitionContext {
  dataSet: object;
  errors: object;

  constructor(dataSet: object) {
    this.dataSet = dataSet;
  }
}
