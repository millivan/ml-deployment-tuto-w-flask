import { useState } from "react";

const User = ({ name, age, onClickHandler }) => {
  return (
    <>
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
      <button onClick={onClickHandler}>Click Me</button>
    </>
  );
};

const SecondUser = () => {
  const [noOfClicks, setNoOfClicks] = useState(0);
  const increment = () => {
    setNoOfClicks(noOfClicks + 1);
  };
  return (
    <>
      <h2>Second User Here</h2>
      <button onClick={increment}>Click hehe</button>
      <p>Click Counter: {noOfClicks}</p>
    </>
  );
};

export { User, SecondUser };
