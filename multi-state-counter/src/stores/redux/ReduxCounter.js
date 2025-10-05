import CounterControls from "../../components/CounterControls";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./actions";

export default function ReduxCounter() {
  // const count = useSelector((state) => state.count);
  // const dispatch = useDispatch();
  return (
    <CounterControls
      // count={count}
      // onIncrement={() => increment()}
      // onDecrement={() => decrement()}
      // onReset={() => reset()}
    />
  );
}
