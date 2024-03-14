import React from "react";
import { Form, redirect, useLoaderData } from "react-router-dom";
import { updateRecord } from "../../Double/fun";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import {
  TableRow,
  TableCell,
  TableBody,
  Input,
  Table,
  Button,
  Select,
} from "semantic-ui-react";

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  console.log(`formdata:`);
  console.log(updates);
  console.log(params);
  await updateRecord(axios, params.unitId, updates, "unit");

  return null;
  //return redirect(`/master/unit/${params.unitId}`);
}

export default function UnitForm({ data }) {
  return (
    <>
      <div className="item_form">
        <Form method="post">
          <h2 className="pl_10">Unit: {data.unit_name}</h2>
          <Table celled striped>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Input
                    placeholder="Unit Name*"
                    name="unit_name"
                    className="form__input"
                    required
                    defaultValue={data.unit_name}
                    //error={true}
                  />
                </TableCell>
                <TableCell>
                  <Input
                    name="short_name"
                    placeholder="Short Name*"
                    required
                    defaultValue={data.short_name}
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
