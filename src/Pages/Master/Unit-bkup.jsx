import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbDivider,
  BreadcrumbSection,
} from "semantic-ui-react";
import Unitpara from "./Unitpara";
export default function Unit() {
  const submitHandler = async (event) => {
    console.log(event.target[0].files[0]);
    const file2 = event.target[0].files[0];
    console.log(file2);
    const formData = new FormData();
    formData.append("file", file2);
    console.log(formData);
    //const a = await insertImage(event.target.files[0]);
    event.preventDefault();
    event.stopPropagation();
  };
  const insertImage = async (imgfile) => {
    axios.post("", imgfile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  return (
    <div>
      <Breadcrumb>
        <BreadcrumbSection as={Link} to="/">
          Home
        </BreadcrumbSection>
        <BreadcrumbDivider icon="right chevron" />
        <BreadcrumbSection as={Link} to="/master">
          Master
        </BreadcrumbSection>
        <BreadcrumbDivider icon="right chevron" />
        <BreadcrumbSection active>Unit</BreadcrumbSection>
      </Breadcrumb>
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
            <TableHeader>
              <TableRow style={tableStyle}>
                <TableHeaderCell>Unit Name</TableHeaderCell>
                <TableHeaderCell>Short Name</TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contacts.map((contact) => (
                <Table.Row
                  onClick={() => show_record(contact.id)}
                  key={contact.id}
                >
                  <Table.Cell>
                    <Checkbox
                      checked={chkstat2[contact.id]}
                      onChange={(event, data) => setTick(contact, event, data)}
                      name={contact.id}
                    />
                  </Table.Cell>
                  <Table.Cell>{contact.company_name}</Table.Cell>
                  <Table.Cell>{contact.contact_person}</Table.Cell>
                  <Table.Cell>{contact.address}</Table.Cell>
                  <Table.Cell>{contact.city}</Table.Cell>
                  <Table.Cell>{contact.state}</Table.Cell>
                  <Table.Cell>{contact.pin}</Table.Cell>
                  <Table.Cell>{contact.role.toUpperCase()}</Table.Cell>
                  <Table.Cell>{contact.email}</Table.Cell>
                  <Table.Cell>{contact.landline}</Table.Cell>
                  <Table.Cell>{contact.mobile}</Table.Cell>
                  <Table.Cell>{contact.gst}</Table.Cell>
                  <Table.Cell>{contact.pan}</Table.Cell>
                  <Table.Cell>{contact.bank}</Table.Cell>
                  <Table.Cell>{contact.account}</Table.Cell>
                  <Table.Cell>{contact.ifsc}</Table.Cell>
                  <Table.Cell>{contact.open_bal}</Table.Cell>
                </Table.Row>
              ))}
            </TableBody>
          </Table>
        </GridRow>
      </Grid>
    </div>
  );
}
