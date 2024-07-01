import { useEffect, useState } from "react";

const button = document.getElementsByName("button");
const form = document.getElementById("myform");
const loader = document.getElementById("loader");

const errormessage = document.createElement("p");

const showError = () => {
  errormessage.textcontent = "We have a problem";
  errormessage.style.color = "red";
  document.body.appendChild(errormessage);
};

const amount = document.getElementsByName("amount").value;
const code = document.getElementsByName("code").value;

//errormessage.textContent = "";

//loader.style.display = "block";

/*.................................................

const Data = (props) => {
  const [rate, setRate] = useState(null);
  const [showLoader, setShowLoader] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setError("");

    //fetch(`https://api.nbp.pl/api/exchangerates/rates/a/${code}/today/`)
    //fetch(`http://api.nbp.pl/api/exchangerates/rates/a/${code}/2024-06-21/`)
    fetch(`http://api.nbp.pl/api/exchangerates/rates/a/eur/2024-06-21/`)
      .then((response) => {
        if (!response.ok) {
          setError("some problems1");
        }
        response.json();
        console.log("test2");
      })
      .then((data) => {
        setRate(data);
        console.log(data);
        console.log("test3");

        //setRate(data.rates[0].mid);
      })
      .catch(() => {
        setError("some problems2");
      })
      .finally(() => {
        setShowLoader(false);
      });
    
  }, []);

  return (
    <div>
      <h2>{props.heading}</h2>
      {showLoader ? <p>loading....</p> : null}
      {error ? <div>{error}</div> : null}
      {rate ? <p>get me....</p> : null}
    </div>
  );
};

export default Data;

/*
<buton onClick={rate}>click me</buton> 

const convertedAmount = amount * rate;
document.getElementById("pln").innerText = ` ${convertedAmount.toFixed(
    2
  )} `; */

function Data() {
  const [amount, setAmount] = useState();
  const [rate, setRate] = useState();
  const [total, setTotal] = useState();
  const [error, setError] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    const amount = e.target.amount.value;
  }
  console.log(amount);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    //form.addEventListener("submit", (event) => {
    //const amount = event.target.amount.value;

    //const code = event.target.code.value;

    // Update the document title using the browser API
    fetch(`http://api.nbp.pl/api/exchangerates/rates/a/eur/2024-06-21/`)
      .then((response) => response.json())

      .then((data) => {
        if (!data) {
          showError();
          return;
        }

        //const rate = data.rates[0].mid;
        setRate(data.rates[0].mid);

        console.log(rate);

        const convertedAmount = amount * rate;
        console.log(amount);

        document.getElementById("pln").innerText = ` ${convertedAmount.toFixed(
          2
        )} `;

        // loader.style.display = "none";
      })
      .catch(() => {
        showError();

        //loader.style.display = "none";
      });

    //setRate(data.rates[0].mid);

    //document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {total} times</p>

      <button onClick={() => setTotal(rate + amount)}>Click me</button>
    </div>
  );
}

export default Data;
