import { useState } from "react";

const Data = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const getData = () => {
    fetch("https://randomuser.me/api/")
      .then((resp) => resp.json())
      .then((data) => {
        // console.log(data.results[0].email);

        const nameObj = data.results[0].name;
        const name = `${nameObj.title} ${nameObj.first} ${nameObj.last}`;
        const email = data.results[0].email;

        setName(name);
        setEmail(email);
      });

    // const nameObj = data.results[0].name;
    // const name = `${nameObj.title} ${nameObj.first} ${nameObj.last}`;
    // console.log(name);
    // console.log(data.results[0].name);
    // setName(data.results[0].name);
    // setEmail(data.results[0].email);
  };
  return (
    <div>
      <button onClick={getData}>Fetch Data</button>
      <p>
        {name ? name : "Unknown name"} - {email ? email : "Unknown email"}
      </p>
    </div>
  );
};

export default Data;
