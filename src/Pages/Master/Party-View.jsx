import { useLoaderData, redirect, useNavigate } from "react-router-dom";
import {
  Table,
  Button,
  Grid,
  GridRow,
  GridColumn,
  TableRow,
  TableBody,
  TableCell,
} from "semantic-ui-react";

import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { MasterUrl } from "../../Consts/Master/MasterUrl.const";
import { getIdEntry } from "../../Double/fun";

export async function loader({ params }) {
  console.log(`inside loader partyview:`);
  //console.log(params);

  const data = await getIdEntry(
    axios,
    MasterUrl.getIdEntry,
    params.partyId,
    "party"
  );
  console.log(data);
  return data;
}

export default function PartyView() {
  const contact = useLoaderData();

  console.log(`contactView::`);
  console.log(contact);

  const navigate = useNavigate();

  const editParty = (id) => {
    //console.log(id);
    navigate(`Edit`);
  };

  return (
    <Grid verticalAlign="middle">
      <GridRow centered color="blue" style={{ fontWeight: "900" }}>
        <GridColumn textAlign="center" width={12}>
          {contact.company_name}
        </GridColumn>
        <GridColumn
          floated="right"
          width={4}
          // color="red"
          textAlign="right"
          verticalAlign="middle"
        >
          <Button onClick={() => editParty(contact.id)}>Edit</Button>
          <Button>Delete</Button>
        </GridColumn>
      </GridRow>
      <GridRow centered>
        <Table style={{ maxWidth: "900px" }} celled>
          <TableBody>
            <TableRow>
              <TableCell style={{ fontWeight: "900" }}>
                Contact Person
              </TableCell>
              <TableCell>{contact.contact_person}</TableCell>
              <TableCell style={{ fontWeight: "900" }}>GST</TableCell>
              <TableCell>{contact.gst.toUpperCase()}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ fontWeight: "900" }}>Address</TableCell>
              <TableCell>
                {contact.address}
                <br />
                {contact.city}
                <br />
                {contact.state}
                <br />
                {contact.pin}
              </TableCell>
              <TableCell style={{ fontWeight: "900" }}>PAN</TableCell>
              <TableCell>{contact.pan}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ fontWeight: "900" }}>
                Contact Details
              </TableCell>
              <TableCell>
                {contact.email}
                <br />
                {contact.landline}
                <br />
                {contact.mobile}
              </TableCell>
              <TableCell style={{ fontWeight: "900" }}>Bank Details</TableCell>
              <TableCell>
                A/c No:{contact.account}
                <br />
                {contact.bank}
                <br />
                {contact.ifsc}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ fontWeight: "900" }}>
                Date of Creation
              </TableCell>
              <TableCell>{contact.dtd}</TableCell>
              <TableCell style={{ fontWeight: "900" }}>Created By</TableCell>
              <TableCell>{contact.user}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </GridRow>
    </Grid>
  );
}
