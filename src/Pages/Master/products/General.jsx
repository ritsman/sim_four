import React from "react";
import { Form } from "react-router-dom";
import { Button, Input, Label } from "semantic-ui-react";

const General = ({ formData, setFormData }) => {
  return (
    <div>
      <Form>
        <Label>Name:</Label>
        <Input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <br />
        <Label>Email:</Label>
        <Input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <Button primary>Save</Button>
      </Form>
    </div>
  );
};

export default General;
