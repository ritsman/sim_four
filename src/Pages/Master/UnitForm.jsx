import React, { useEffect, useState } from "react";
import { Form, redirect, useActionData, useLoaderData } from "react-router-dom";
import { getPageData, updateRecord } from "../../Double/fun";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "./partyForm.css";

import {
  TableRow,
  TableCell,
  TableBody,
  Input,
  Table,
  Button,
  Grid,
  GridRow,
  GridColumn,
  Card,
  CardContent,
  CardHeader,
  CardDescription,
} from "semantic-ui-react";
import {
  MasterUrl,
  records_per_page,
} from "../../Consts/Master/MasterUrl.const";

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
    // await updateRecord(axios, params.unitId, updates, "unit");
    return null;
    //return redirect(`/master/unit/${params.unitId}`);
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

export default function UnitForm({ data }) {
  const errors = useActionData();

  // const unit = useLoaderData();
  // const [unitData, setUnitData] = useState(unit);

  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get("https://arya-erp.in/simranapi/master/get_units.php")
      .then((response) => {
        setPost(response.data);
      });
  }, []);
  console.log("inside post");
  console.log(post);

  const [search, setSearch] = useState("");
  const [isInputFocused, setInputFocused] = useState(false);
  return (
    <>
      <Form method="post">
        <Grid verticalAlign="middle">
          <GridRow centered color="blue" style={{ fontWeight: "900" }}>
            <GridColumn textAlign="center" width={12}>
              {data.unit_name}
            </GridColumn>
            <GridColumn
              floated="right"
              width={4}
              textAlign="right"
              verticalAlign="middle"
            >
              <Button>Submit</Button>
              <Button>Cancel</Button>
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
                <TableRow>
                  <TableCell
                    textAlign="center"
                    verticalAlign="middle"
                    style={{ fontWeight: "900" }}
                  >
                    Unit Name
                  </TableCell>
                  <TableCell>
                    <Input
                      onFocus={() => setInputFocused(true)}
                      onBlur={() => setInputFocused(false)}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Unit Name*"
                      name="unit_name"
                      className="form__input"
                      defaultValue={data.unit_name}
                      error={errors?.unit_name}
                    />
                  </TableCell>
                  <TableCell
                    textAlign="center"
                    verticalAlign="middle"
                    style={{ fontWeight: "900" }}
                  >
                    Short Name
                  </TableCell>
                  <TableCell>
                    <Input
                      name="short_name"
                      placeholder="Short Name*"
                      defaultValue={data.short_name}
                      error={errors?.short_name}
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </GridRow>
          {isInputFocused && (
            <Grid.Column floated="right" width={3}>
              <Card>
                <CardContent>
                  <CardHeader>Unit Names</CardHeader>

                  {post
                    .filter((item) => {
                      return search.toUpperCase() === ""
                        ? item
                        : item.unit_name.includes(search);
                    })
                    .map((item) => (
                      <CardDescription>{item.unit_name}</CardDescription>
                    ))}
                </CardContent>
              </Card>
            </Grid.Column>
          )}
        </Grid>
      </Form>
    </>
  );
}
