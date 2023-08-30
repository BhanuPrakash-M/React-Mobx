import { observer } from "mobx-react-lite";
import { useStore } from "../Hooks/useStore";

const Counter = observer(() => {
  const {
    rootContext: { CounterStore },
  } = useStore();
  return (
    <div>
      Count: {CounterStore.count}
      <div>
        <button onClick={() => CounterStore.increment()}>+</button>
        <button onClick={() => CounterStore.decrement()}>-</button>
        <button onClick={() => CounterStore.reset()}>reset</button>
      </div>
    </div>
  );
});
export default Counter;
