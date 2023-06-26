import { useSelector } from "react-redux";

const CounterValue = () => {
  const count = useSelector((state) => state.counter.value);

  return (
    <>
      <h1>Counter value is {count}</h1>
    </>
  );
};

export default CounterValue;
