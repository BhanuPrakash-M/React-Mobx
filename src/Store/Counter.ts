import { action, computed, makeObservable, observable } from "mobx";
import { IRootStore } from "./Root";

export class Counter {
  count: number = 0;
  rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      count: observable,
      increment: action,
      decrement: action,
      reset: action,
      getCount: computed,
    });
    this.rootStore = rootStore;
  }
  increment = () => {
    this.count++;
  };
  decrement = () => {
    this.count--;
  };
  reset = () => {
    this.count = 0;
  };

  public get getCount(): number {
    return this.count;
  }
}
