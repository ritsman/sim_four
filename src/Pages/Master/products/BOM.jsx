import React from "react";
import { Form } from "react-router-dom";
import { Button, Input, Label } from "semantic-ui-react";

const BOM = ({ formData, setFormData, handleSwitchForm }) => {
  return (
    <div>
      <Form>
        <Label>Age:</Label>
        <Input
          type="number"
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
        />
        <Button primary>Save</Button>
      </Form>
    </div>
  );
};

export default BOM;
