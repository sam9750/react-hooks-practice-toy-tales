import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";




function App() {
  const [showForm, setShowForm] = useState(false);
  const [toy, setToy] = useState([]);
  const toysUrl = "http://localhost:3000/toys"

  useEffect(() => {
    function fetch() {
      fetch(toysUrl)
        .then(r => r.json())
        .then(toys => setToy(toys));
    };
  }, []);

      console.log(toy)


// we need to send our toy down as props to our toycard, send to ToyContainer first then ToyCard, make POST request in ToyForm



  function handleClick() {
    setShowForm((showForm) => !showForm);








  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer />
    </>
  );
}




export default App;
