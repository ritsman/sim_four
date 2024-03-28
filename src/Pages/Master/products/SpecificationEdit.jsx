import { Form, useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { getIdEntry, getPageData, updateRecord } from "../../../Double/fun";
import {
  MasterUrl,
  records_per_page,
} from "../../../Consts/Master/MasterUrl.const";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  Grid,
  GridColumn,
  GridRow,
  Input,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "semantic-ui-react";
import { toast } from "react-toastify";

export default function GeneralEdit() {
  const { specId } = useParams();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    style_id: "",
    style_name: "",
    header: "",
    size: "",
    value: "",
  });
  //to fetch params.id data
  useEffect(() => {
    (async () => {
      try {
        const data = await getIdEntry(
          axios,
          MasterUrl.getIdEntry,
          specId,
          "prodspec"
        );
        setValues({
          ...values,
          style_id: data.style_id,
          style_name: data.style_name,
          header: data.header,
          size: data.size,
          value: data.value,
        });
        //console.log(data);
        return data;
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  const [search, setSearch] = useState("");
  const [post, setPost] = useState([]);
  const [isInputFocused, setInputFocused] = useState(false);

  //to get all styles name
  useEffect(() => {
    (async () => {
      try {
        const data = await getPageData(
          axios,
          MasterUrl.getPageData,
          records_per_page,
          1,
          "prodspec"
        );
        console.log(data);
        setPost(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await updateRecord(axios, specId, values, "prodspec");
    console.log(res);
    if (res == "success") {
      toast.success("Successfully Edited");
      navigate(`/master/product/specification/${specId}`);
    } else {
      toast.error("Error");
    }
  };
  return (
    <>
      <Form method="post" onSubmit={handleSubmit}>
        <Grid verticalAlign="middle">
          <GridRow centered color="blue" style={{ fontWeight: "900" }}>
            <GridColumn textAlign="center" width={12}>
              {values.style_name}
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
                        : item.style_name.includes(search);
                    })
                    .map((item) => (
                      <CardDescription style={{ fontWeight: "bold" }}>
                        {item.style_name}
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
                    Style ID
                  </TableCell>
                  <TableCell>
                    <Input
                      disabled
                      value={values.style_id}
                      placeholder="Style ID*"
                      name="style_id"
                      className="form__input"
                      // error={errors?.style_name}
                    />
                  </TableCell>
                  <TableCell
                    textAlign="center"
                    verticalAlign="middle"
                    style={{ fontWeight: "900" }}
                  >
                    Style Name
                  </TableCell>
                  <TableCell>
                    <Input
                      disabled
                      value={values.style_name}
                      onFocus={() => setInputFocused(true)}
                      onBlur={() => setInputFocused(false)}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Style Name*"
                      name="style_name"
                      className="form__input"
                      // error={errors?.style_name}
                    />
                  </TableCell>
                  <TableCell
                    textAlign="center"
                    verticalAlign="middle"
                    style={{ fontWeight: "900" }}
                  >
                    Header
                  </TableCell>
                  <TableCell>
                    <Input
                      value={values.header}
                      onChange={(e) =>
                        setValues({ ...values, header: e.target.value })
                      }
                      name="header"
                      placeholder="Header*"
                      defaultValue={values.header}
                      // error={errors?.header}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    textAlign="center"
                    verticalAlign="middle"
                    style={{ fontWeight: "900" }}
                  >
                    Value
                  </TableCell>
                  <TableCell>
                    <Input
                      value={values.value}
                      onChange={(e) =>
                        setValues({ ...values, value: e.target.value })
                      }
                      name="value"
                      placeholder="Value*"
                      defaultValue={values.value}
                      // error={errors?.category}
                    />
                  </TableCell>
                  <TableCell
                    textAlign="center"
                    verticalAlign="middle"
                    style={{ fontWeight: "900" }}
                  ></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </GridRow>
        </Grid>
      </Form>
    </>
  );
}
