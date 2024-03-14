import React from "react";
import { Form, redirect, useLoaderData } from "react-router-dom";
import { updateRecord } from "../../Double/fun";
import axios from "axios";

import {
  TableRow,
  TableCell,
  TableBody,
  Input,
  Table,
  Button,
  Select,
  Item,
} from "semantic-ui-react";

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  console.log(`formdata:`);
  console.log(updates);
  console.log(params);
  await updateRecord(axios, params.itemId, updates, "items");

  return null;
  //return redirect(`/master/item/${params.itemId}`);
}

export default function ItemForm({ data }) {
  return (
    <>
      <div className="item_form">
        <Form method="post">
          <h2 className="pl_10">Item: {data.name}</h2>
          <Table celled striped>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Input
                    placeholder="Item Name*"
                    name="name"
                    className="form__input"
                    required
                    defaultValue={data.name}
                    //error={true}
                  />
                </TableCell>
                <TableCell>
                  <Input
                    name="item_type"
                    placeholder="Item Type*"
                    required
                    defaultValue={data.item_type}
                  />
                </TableCell>
                <TableCell>
                  <Input
                    name="item_color"
                    placeholder="Item Color*"
                    required
                    defaultValue={data.item_color}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Input
                    name="specification"
                    placeholder="Specificstion*"
                    required
                    defaultValue={data.specification}
                  />
                </TableCell>
                <TableCell>
                  <Input
                    name="gst"
                    placeholder="GST*"
                    required
                    defaultValue={data.gst}
                  />
                </TableCell>
                <TableCell>
                  <Input
                    name="hsn_code"
                    placeholder="HSN_Code*"
                    required
                    defaultValue={data.hsn_code}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Input
                    name="rate"
                    placeholder="Rate*"
                    required
                    defaultValue={data.rate}
                  />
                </TableCell>
                <TableCell>
                  <Input
                    name="issue_unit"
                    placeholder="Issue Unit*"
                    required
                    defaultValue={data.issue_unit}
                  />
                </TableCell>
                <TableCell>
                  <Input
                    name="buffer_unit"
                    placeholder="Buffer Unit*"
                    required
                    defaultValue={data.buffer_unit}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Input
                    name="moq"
                    placeholder="MOQ*"
                    required
                    defaultValue={data.moq}
                  />
                </TableCell>
                <TableCell>
                  <Input
                    name="msc1"
                    placeholder="Msc1*"
                    required
                    defaultValue={data.msc1}
                  />
                </TableCell>
                <TableCell>
                  <Input
                    name="msc2"
                    placeholder="Msc2*"
                    required
                    defaultValue={data.msc2}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="text-center">
            <Button primary className="mr_10">
              Submit
            </Button>
            <Button primary>cancel</Button>
          </div>
        </Form>
      </div>
    </>
  );
}
