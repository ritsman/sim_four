import React, { useEffect, useState } from "react";
import { Form, redirect, useActionData } from "react-router-dom";
import { getPageData, updateRecord } from "../../Double/fun";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
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
  Icon,
  Select,
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
    const res = await updateRecord(axios, params.processId, updates, "process");

    console.log("inside upd2");
    console.log(res);
    if (res == "success") {
      toast.success("Successfully Edited");
      return redirect(`/master/process/${params.processId}`);
    } else {
      toast.error("Error");
      return null;
    }
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
  //console.log(errors);
  return errors;
};

export default function ProcessForm({ data }) {
  const errors = useActionData();

  const [post, setPost] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await getPageData(
          axios,
          MasterUrl.getPageData,
          records_per_page,
          1,
          "process"
        );
        console.log(data);
        setPost(data);
      } catch (err) {
        console.log("Error occured when fetching books");
      }
    })();
  }, []);

  const [actData, setActData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await getPageData(
          axios,
          MasterUrl.getPageData,
          records_per_page,
          1,
          "activity"
        );
        console.log(data);
        setActData(data);
      } catch (err) {
        console.log("Error occured when fetching books");
      }
    })();
  }, []);
  console.log("actData");
  console.log(actData);

  let dropData = actData.map((data) => data.activity_name);
  dropData = dropData.map((str, index) => ({
    key: index + 1,
    value: str,
    text: str,
  }));

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

  const activity_length = data.activities.split("**").length;
  const data_activity = data.activities.split("**");

  // console.log(`activity_length: ${activity_length}`);

  const rows2 = data_activity.map((act, ind) => {
    //console.log(act, ind);
    return {
      id: ind,
      val: act,
    };
  });

  const [row_id, setRow_id] = useState(activity_length); //1
  //console.log(row_id + "usestate");
  const [rows, setRows] = useState(rows2);

  const handleAddRow = (e) => {
    console.log("add clicked");
    console.log(`row_id:${row_id}`);
    // console.log("rows.length");
    // console.log(rows.length);
    setRows([...rows, { id: row_id }]);
    setRow_id(row_id + 1);
    console.log(rows);
    e.preventDefault();
  };

  const handleDelRow = (e, ind) => {
    console.log("cross clicked");
    console.log(`index:${ind}`);

    const updated_rows = [...rows];
    //console.log(`rows:${rows}`);
    //console.log(`updated_rows: ${updated_rows}`);
    updated_rows.splice(ind, 1);
    console.log(rows);
    console.log(updated_rows);
    setRows(updated_rows);
    console.log(`updated_rows: ${updated_rows}`);

    e.preventDefault();
  };

  const removeItem = (ind) => {
    const updatedItems = rows.filter((item) => item.id !== ind);
    console.log(updatedItems);
    setRows(updatedItems);
  };

  const [search, setSearch] = useState("");
  const [isInputFocused, setInputFocused] = useState(false);
  return (
    <>
      <Form method="post">
        <Grid verticalAlign="middle">
          <GridRow centered color="blue" style={{ fontWeight: "900" }}>
            <GridColumn textAlign="center" width={12}>
              {data.process_name}
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
          {isInputFocused && (
            <Grid.Column floated="right" width={3}>
              <Card>
                <CardContent>
                  {post
                    .filter((item) => {
                      return search.toUpperCase() === ""
                        ? item
                        : item.process_name.includes(search);
                    })
                    .map((item) => (
                      <CardDescription style={{ fontWeight: "bold" }}>
                        {item.process_name}
                      </CardDescription>
                    ))}
                </CardContent>
              </Card>
            </Grid.Column>
          )}

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
                    Process Name
                  </TableCell>
                  <TableCell>
                    <Input
                      onFocus={() => setInputFocused(true)}
                      onBlur={() => setInputFocused(false)}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Process Name*"
                      name="process_name"
                      className="form__input"
                      defaultValue={data.process_name}
                      error={errors?.process_name}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    textAlign="center"
                    verticalAlign="middle"
                    style={{ fontWeight: "900" }}
                  >
                    <Button style={plus_button}>
                      <Icon
                        className="plus"
                        name="plus"
                        onClick={(e) => handleAddRow(e)}
                      />
                    </Button>
                    Activities
                  </TableCell>
                  <TableCell>
                    {rows.map((row) => {
                      // console.log(row);
                      return (
                        <TableRow key={`R${row.id}`}>
                          <TableCell style={icons_cell}>
                            <Button style={plus_button}>
                              <Icon
                                style={{
                                  paddingLeft: "30px",
                                  paddingTop: "20px",
                                }}
                                className="close_btn"
                                name="close"
                                onClick={() => removeItem(row.id)}
                              />
                            </Button>
                          </TableCell>
                          <TableCell>
                            {/* <Select
                              placeholder="Activities"
                              name="activities"
                              options={dropData}
                              defaultValue={row.val}
                            /> */}
                            <select
                              placeholder="Select Activities"
                              name="activities"
                              defaultValue={row.val}
                              style={{ padding: "10px 55px", border: "none" }}
                            >
                              <option value="" selected disabled hidden>
                                Choose here
                              </option>
                              {actData.map((data) => (
                                <option value={data.activity_name}>
                                  {data.activity_name}
                                </option>
                              ))}
                            </select>
                          </TableCell>
                        </TableRow>
                      );
                    })}
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
