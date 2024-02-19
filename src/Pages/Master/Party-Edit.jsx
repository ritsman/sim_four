import { useLoaderData, Form, redirect, useNavigate } from "react-router-dom";
/* import the AutoComplete dependency styles */

import "../../../node_modules/@syncfusion/ej2-base/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-react-inputs/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-react-dropdowns/styles/material.css";

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

import { AutoCompleteComponent } from "@syncfusion/ej2-react-dropdowns";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useState } from "react";

export async function loader({ params }) {
  console.log(params);

  const data = await get_contact_info(params.partyId);
  console.log(`inside loader party edit: data`);
  console.log(data);
  return data;
  //return ["a", "b"];
}
async function get_contact_info(id) {
  const info_pages = await axios.get(
    `https://arya-erp.in/simranapi/get_contact.php?party=${id}`
  );
  console.log(info_pages.data);
  return info_pages.data;
}

async function update_contact(id, updates) {
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
  await update_contact(params.partyId, updates);

  //return null;
  return redirect(`${params.partyId}`);
}

export default function PartyEdit() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleCancel = () => {
    setOpen(false);
    navigate("/party", { replace: true });
  };
  const handleConfirm = () => {
    setOpen(false);
    navigate("/dashboard", { replace: true });
  };
  const contact = useLoaderData();
  console.log(`this id to edit contact::`);
  console.log(contact.id);
  const sportsData = [
    "Badminton",
    "Basketball",
    "Cricket",
    "Football",
    "Golf",
    "Hockey",
    "Snooker",
    "Tennis",
  ];

  return (
    <>
      <h2>Party-Edit</h2>
      <Table celled className="externalTable">
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Header</TableHeaderCell>
            <TableHeaderCell>Header</TableHeaderCell>
            <TableHeaderCell>Header</TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell>
              <Label ribbon>First</Label>
            </TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      )
      <AutoCompleteComponent
        id="atcelement"
        dataSource={sportsData}
        placeholder="Find a game"
      />
      <Button onClick={handleOpen}>Show</Button>
      <Confirm open={open} onCancel={handleCancel} onConfirm={handleConfirm} />
    </>
  );
}
