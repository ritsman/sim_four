import React, { useState, useEffect } from "react";
import { Form, redirect, useActionData } from "react-router-dom";
import { getPageData, updateRecord } from "../../Double/fun";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "./partyForm.css";
import {
  Grid,
  GridRow,
  GridColumn,
  TableRow,
  TableCell,
  TableBody,
  Input,
  Table,
  Button,
  Select,
  Item,
} from "semantic-ui-react";

import { MasterUrl } from "../../Consts/Master/MasterUrl.const";

const dropData = [
  { key: "one", value: "one", text: "One" },
  { key: "two", value: "two", text: "Two" },
  { key: "three", value: "three", text: "Three" },
];

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  console.log(`formdata:`);
  console.log(updates);
  //console.log(params);
  const error = validation(updates);
  if (Object.keys(error).length) {
    console.log(error);
    return error;
  } else {
    await updateRecord(axios, params.itemId, updates, "item", toast);

    return redirect(`/master/item/${params.itemId}`);
  }

  //return null;
}
const validation = (formData) => {
  const errors = {};

  Object.keys(formData).forEach((key) => {
    if (!formData[key]) {
      errors[key] = `Please fill ${key}`;
    }
  });
  console.log(errors);
  return errors;
};

export default function ItemForm({ data }) {
  const errors = useActionData();

  const [post, setPost] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(getPageData(axios, MasterUrl.getPageData, 10, 1, "items"))
  //     .then((response) => {
  //       setPost(response.data);
  //     });
  // }, []);
  // console.log("inside post");
  // console.log(post);

  const [search, setSearch] = useState("");
  const [isInputFocused, setInputFocused] = useState(false);
  return (
    <>
      <Form method="post">
        <Grid verticalAlign="middle">
          <GridRow centered color="blue" style={{ fontWeight: "900" }}>
            <GridColumn textAlign="center" width={12}>
              {data.name}
            </GridColumn>
            <GridColumn
              floated="right"
              width={4}
              textAlign="right"
              verticalAlign="middle"
            >
              <Button>Submit</Button>
              <Button>Cancel</Button>
              <ToastContainer />
            </GridColumn>
          </GridRow>
          <GridRow centered>
            <Table
              className="borderless-table"
              basic="very"
              collapsing
              style={{ maxWidth: "1200px" }}
            >
              <TableBody>
                <TableRow style={{ borderCollapse: "collapse" }}>
                  <TableCell
                    textAlign="center"
                    verticalAlign="middle"
                    style={{ fontWeight: "900" }}
                  >
                    Item Name
                  </TableCell>
                  <TableCell>
                    <Input
                      placeholder="Item Name*"
                      name="name"
                      className="form__input"
                      defaultValue={data.name}
                      error={errors?.name}
                    />
                  </TableCell>
                  <TableCell
                    textAlign="center"
                    verticalAlign="middle"
                    style={{ fontWeight: "900" }}
                  >
                    Item Type
                  </TableCell>
                  <TableCell>
                    <Input
                      name="item_type"
                      placeholder="Item Type*"
                      defaultValue={data.item_type}
                      error={errors?.item_type}
                    />
                  </TableCell>
                  <TableCell
                    textAlign="center"
                    verticalAlign="middle"
                    style={{ fontWeight: "900" }}
                  >
                    Item Color
                  </TableCell>
                  <TableCell>
                    <Input
                      name="item_color"
                      placeholder="Item Color*"
                      defaultValue={data.item_color}
                      error={errors?.item_color}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    textAlign="center"
                    verticalAlign="middle"
                    style={{ fontWeight: "900" }}
                  >
                    Item Select
                  </TableCell>
                  <TableCell>
                    <Input
                      name="item_select"
                      placeholder="Item Select*"
                      defaultValue={data.item_select}
                      error={errors?.item_select}
                    />
                  </TableCell>

                  <TableCell
                    textAlign="center"
                    verticalAlign="middle"
                    style={{ fontWeight: "900" }}
                  >
                    GST
                  </TableCell>
                  <TableCell>
                    <Input
                      name="gst"
                      placeholder="GST*"
                      defaultValue={data.gst}
                      error={errors?.gst}
                    />
                  </TableCell>
                  <TableCell
                    textAlign="center"
                    verticalAlign="middle"
                    style={{ fontWeight: "900" }}
                  >
                    HSN Code
                  </TableCell>
                  <TableCell>
                    <Input
                      name="hsn_code"
                      placeholder="HSN_Code*"
                      defaultValue={data.hsn_code}
                      error={errors?.hsn_code}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    textAlign="center"
                    verticalAlign="middle"
                    style={{ fontWeight: "900" }}
                  >
                    Rate
                  </TableCell>
                  <TableCell>
                    <Input
                      name="rate"
                      placeholder="Rate*"
                      defaultValue={data.rate}
                      error={errors?.rate}
                    />
                  </TableCell>
                  <TableCell
                    textAlign="center"
                    verticalAlign="middle"
                    style={{ fontWeight: "900" }}
                  >
                    Issue Unit
                  </TableCell>
                  <TableCell>
                    <Input
                      name="issue_unit"
                      placeholder="Issue Unit*"
                      defaultValue={data.issue_unit}
                      error={errors?.issue_unit}
                    />
                  </TableCell>
                  <TableCell
                    textAlign="center"
                    verticalAlign="middle"
                    style={{ fontWeight: "900" }}
                  >
                    Buffer Unit
                  </TableCell>
                  <TableCell>
                    <Input
                      name="buffer_unit"
                      placeholder="Buffer Unit*"
                      defaultValue={data.buffer_unit}
                      error={errors?.buffer_unit}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    textAlign="center"
                    verticalAlign="middle"
                    style={{ fontWeight: "900" }}
                  >
                    Opening Stock
                  </TableCell>
                  <TableCell>
                    <Input
                      name="opening_stock"
                      placeholder="Opening Stock*"
                      defaultValue={data.opening_stock}
                      error={errors?.opening_stock}
                    />
                  </TableCell>
                  <TableCell
                    textAlign="center"
                    verticalAlign="middle"
                    style={{ fontWeight: "900" }}
                  >
                    Purchase Unit
                  </TableCell>
                  <TableCell>
                    <Input
                      name="purchase_unit"
                      placeholder="Purchase Unit*"
                      defaultValue={data.purchase_unit}
                      error={errors?.purchase_unit}
                    />
                  </TableCell>
                  <TableCell
                    textAlign="center"
                    verticalAlign="middle"
                    style={{ fontWeight: "900" }}
                  >
                    Purchase Issue Ratio
                  </TableCell>
                  <TableCell>
                    <Input
                      name="purchase_issue_atio"
                      placeholder="Purchase Issue Ratio*"
                      defaultValue={data.purchase_issue_atio}
                      error={errors?.purchase_issue_atio}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    textAlign="center"
                    verticalAlign="middle"
                    style={{ fontWeight: "900" }}
                  >
                    MOQ
                  </TableCell>
                  <TableCell>
                    <Input
                      name="moq"
                      placeholder="MOQ*"
                      defaultValue={data.moq}
                    />
                  </TableCell>
                  <TableCell
                    textAlign="center"
                    verticalAlign="middle"
                    style={{ fontWeight: "900" }}
                  >
                    MSC1
                  </TableCell>
                  <TableCell>
                    <Input
                      name="msc1"
                      placeholder="Msc1*"
                      defaultValue={data.msc1}
                    />
                  </TableCell>
                  <TableCell
                    textAlign="center"
                    verticalAlign="middle"
                    style={{ fontWeight: "900" }}
                  >
                    MSC2
                  </TableCell>
                  <TableCell>
                    <Input
                      name="msc2"
                      placeholder="Msc2*"
                      defaultValue={data.msc2}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    textAlign="center"
                    verticalAlign="middle"
                    style={{ fontWeight: "900" }}
                  >
                    Specification
                  </TableCell>
                  <TableCell>
                    <Input
                      name="specification"
                      placeholder="specification*"
                      defaultValue={data.specification}
                      error={errors?.specification}
                    />
                  </TableCell>
                  <TableCell
                    textAlign="center"
                    verticalAlign="middle"
                    style={{ fontWeight: "900" }}
                  >
                    User
                  </TableCell>
                  <TableCell>
                    <Input
                      name="user"
                      placeholder="User*"
                      defaultValue={data.user}
                      error={errors?.user}
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </GridRow>
        </Grid>
      </Form>
    </>
  );
}
