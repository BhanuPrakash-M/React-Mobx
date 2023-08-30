import { Counter } from "./Counter";

export interface IRootStore {
  CounterStore: Counter;
}

export class Root implements IRootStore {
  CounterStore: Counter;

  constructor() {
    this.CounterStore = new Counter(this);
  }
}
