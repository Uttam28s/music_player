import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
import { increment, decrement, changeIncrementAmount, } from "./store/counterReducer";

function Test() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
const playList = useSelector((state : RootState) => state.playList.list);
  const incrementAmount = useSelector(
    (state: RootState) => state.counter.incrementAmount
  );

  function handleChange(incrementAmountValue: string) {
    dispatch(changeIncrementAmount(Number(incrementAmountValue)));
  }

  return (
    <>
        <div>{count}</div>
        
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => dispatch(increment())}>increment</button>
    </>

    
  );
}

export default Test;