import { useState } from "react";
import DataFetch from "../Data/DataFetch";

const DisplayCalculations = (props) => {
  const [rate, setRate] = useState(props.rate);
  const [amount, setAmount] = useState(props.amount);
  const [code, setCode] = useState(props.time);
  const [result, setResult] = useState(props.result);

  console.log("Calulation rate:" + rate);

  return (
    <div>
      <h6>Display Calculations "+" {rate}</h6>
    </div>
  );
};

export default DisplayCalculations;
