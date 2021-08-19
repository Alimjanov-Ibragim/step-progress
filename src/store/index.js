import { makeAutoObservable } from 'mobx';

// Model the application state.
class MobTest {
  stepItems = [];

  constructor() {
    makeAutoObservable(this);
  }

  handleSteps(data) {
    this.stepItems = data;
  }

  get getSteps() {
    return this.stepItems;
  }
}

export const mobTest = new MobTest();
