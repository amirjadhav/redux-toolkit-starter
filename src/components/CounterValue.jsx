import { useSelector } from "react-redux";

const CounterValue = () => {
  const count = useSelector((state) => state.counter.value);

  return (
    <>
      <h1>COunter value is {count}</h1>
    </>
  );
};

export default CounterValue;
