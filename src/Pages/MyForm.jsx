import React, { useState } from "react";
import { Input } from "semantic-ui-react";

const MyForm = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValue({ [name]: value });
  };

  const validate = (e) => {
    if (value.length == 0) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <>
      <Input
        name="email"
        value={value}
        onChange={handleChange}
        error={error}
        placeholder="Enter something..."
      />
      <Input
        name="pass"
        value={value}
        onChange={handleChange}
        error={error}
        placeholder="Enter somethingg..."
      />
      <button onClick={validate}>Submit</button>
    </>
  );
};

export default MyForm;
