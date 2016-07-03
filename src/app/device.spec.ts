/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import {Device} from './device';

describe('Device', () => {
  it('should create an instance', () => {
    expect(new Device()).toBeTruthy();
  });
});
