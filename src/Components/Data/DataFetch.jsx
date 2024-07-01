import React from "react";
import { useEffect, useState } from "react";
import styles from "./DataFetch.module.css";
import DisplayCalculations from "../DisplayCalculations/DisplayCalculations";

const errormessage = document.createElement("p");

//const amount = document.getElementById("amount");
const code = document.getElementsByName("code").value;

const DataFetch = () => {
  const [amount, setAmount] = useState();
  const [code, setCode] = useState();
  const [rate, setRate] = useState(5);
  const [result, setResult] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    //setAmount("Form has been submitted with with Input: " + amount);

    setResult("Form has been submitted with with Input: " + amount);

    setAmount(event.target.amount.value);
    setCode(event.target.code.value);

    console.log("this is my amount" + amount);
    console.log("this is my code" + code);

    console.log("DDD" + amount);
  }

  //function handleChange(event) {
  //  setAmount(event.target.value);
  //  setCode(event.target.value);

  // setResult("");
  // }

  const showError = () => {
    errormessage.textcontent = "We have a problem";
    errormessage.style.color = "red";
    document.body.appendChild(errormessage);
  };

  useEffect(() => {
    //fetch(`http://api.nbp.pl/api/exchangerates/rates/a/${code}/2024-06-21/`)
    fetch(`https://api.nbp.pl/api/exchangerates/rates/a/${code}/2012-01-02/`)
      // fetch(`https://api.nbp.pl/api/exchangerates/rates/a/${code}/today/`)
      .then((response) => {
        if (!response.ok) {
          return Promise.reject(response);
        }
        return response.json();
      })

      .then((data) => {
        if (!data) {
          showError();
          return;
        }

        setRate(data.rates[0].mid);
        setAmount(amount);

        console.log("Amount now on DataFetch:" + amount);

        console.log("Rate now on DataFetch:" + rate);

        const convertedAmount = amount * rate;

        document.getElementById("pln").innerText = ` ${convertedAmount.toFixed(
          2
        )} `;
        console.log("Total now  on DataFetch:" + convertedAmount);
      })

      .catch(() => {
        showError();
      });
  });

  return (
    <section>
      <div>
        <form id="myform" className={styles.container} onSubmit={handleSubmit}>
          <DisplayCalculations rate={rate} />
          <input
            className={styles.item}
            // value={amount}
            //onInput={handleChange}
            name="amount"
            type="number"
            min="0.01"
            step="0.01"
            required
          />
          <select name="code" className={styles.item}>
            <option value="CHF">CHF</option>
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
          </select>
          <button type="submit" className={styles.item}>
            Convert
          </button>
          <span className={styles.para}>
            TO <span id="pln">0</span> PLN2
          </span>
        </form>
        <br />
        <div></div>
      </div>
    </section>
  );
};

export default DataFetch;
