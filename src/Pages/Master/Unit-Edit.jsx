import { useLoaderData, Form, redirect, useNavigate } from "react-router-dom";
/* import the AutoComplete dependency styles */
import * as React from "react";

import {
  Input,
  Table,
  Button,
  Grid,
  GridRow,
  Confirm,
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
} from "semantic-ui-react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

async function get_unit_info(id) {
  const data = await axios.get(
    `https://arya-erp.in/simranapi/master/get_unit_single.php?unit=${id}`
  );
  console.log(data.data);
  return data.data;
}
export async function loader({ params }) {
  console.log(params);

  const data = await get_unit_info(params.unitId);
  console.log(`inside loader unit edit: data`);
  console.log(data);
  return data;
  //return ["a", "b"];
}

async function update_unit(id, updates) {
  console.log(`updates`);
  console.log(updates);
  axios
    .post(`https://arya-erp.in/simranapi/update_contact.php?`, {
      id: id,
      updates: updates,
    })
    .then((response) => {
      console.log(response);
      toast.success(`DEfault Notificatiln!! ${response.data}`);
    });
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  console.log(`formdata:`);
  console.log(updates);
  console.log(params);
  await update_unit(params.unitId, updates);

  //return null;
  return redirect(`${params.partyId}`);
}
//============================main function
export default function UnitEdit() {
  const data = useLoaderData();
  console.log(`data inside unitedit`);
  console.log(data);
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
      <h1>unit{data.unit_name}</h1>
      <Table style={{ maxWidth: "900px" }} celled>
        <TableBody>
          <TableRow>
            <TableCell>
              <input value={data.unit_name}></input>
            </TableCell>
            <TableCell>
              <input value={data.short_name}></input>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Button>Submit</Button>
            </TableCell>
            <TableCell>
              <Button>Cancel</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
