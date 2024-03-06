import React, { useState } from "react";
import { Form, useActionData } from "react-router-dom";
import "./Unitpara.css";
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableFooter,
  TableCell,
  TableBody,
  MenuItem,
  Icon,
  Label,
  Menu,
  Input,
  Table,
  Button,
  IconGroup,
  Modal,
} from "semantic-ui-react";
//validation function
const validation = (formData) => {
  const errors = {};

  // Example validation rules
  // You can modify these rules based on your requirements
  Object.keys(formData).forEach((key) => {
    if (!formData[key]) {
      errors[key] = `${key} is required`;
    }
  });
  console.log(errors);
  return errors;
};

export async function action({ request, params }) {
  console.log(`req::::`);
  const formdata = await request.formData();
  const updates = Object.fromEntries(formdata);

  console.log(updates);
  const errors = validation(updates);
  if (Object.keys(errors).length) {
    return errors;
  } else {
    return 0;
  }
}

export default function Unitpara() {
  const errors = useActionData();

  // Function to handle input change;fetch data from server for units already there
  const handleInputChange = (e, data) => {
    console.log(`e:`);
    // console.log(e);
    console.log(`data:`);
    console.log(data);
    //const errors = validation(updates);
    //setError(errors);
  };
  const plus = {
    // background:'blue',
    color: "black !important",
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const plus_button = {
    background: "transparent",
    padding: "0",
  };

  const tableStyle = {
    border: "none !important",
    // padding:'20px',
  };
  const icons_cell = {
    width: "50px",
  };
  const input_width = {
    width: "100%",
  };

  return (
    <>
      <div className="center_box">
        <Form method="post">
          <div className="table-responsive">
            <Table
              celled
              striped
              style={tableStyle}
              className="table-responsive"
            >
              <TableHeader>
                <TableRow style={tableStyle}>
                  <TableHeaderCell>Unit Name</TableHeaderCell>
                  <TableHeaderCell>Short Name</TableHeaderCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow key={`R1`}>
                  <TableCell>
                    <Input
                      placeholder="Unit Name*"
                      name="unit_name"
                      style={input_width}
                      error={errors?.unit_name}
                      onChange={(e, data) => handleInputChange(e, data)}
                    />
                  </TableCell>
                  <TableCell colSpan="3">
                    <Input
                      placeholder="Short Name*"
                      name="unit_shortname"
                      style={input_width}
                      error={errors?.unit_shortname}
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <div className="text-center">
              <Button primary className="mt_10">
                Submit
              </Button>
              <Button primary>Reset</Button>
            </div>
          </div>
        </Form>
      </div>

      <Modal />
    </>
  );
}
