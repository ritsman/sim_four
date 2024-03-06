import axios from "axios";
import React, { useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import {
  Checkbox,
  Grid,
  Input,
  Icon,
  Table,
  Button,
  GridRow,
  GridColumn,
  TableRow,
  TableBody,
  TableHeader,
  Header,
  TableHeaderCell,
  TableCell,
  Breadcrumb,
  BreadcrumbDivider,
  BreadcrumbSection,
  Pagination,
} from "semantic-ui-react";
import Unitpara from "./Unitpara";
//get * from units table
async function getUnitData() {
  const data = await axios.get(
    "https://arya-erp.in/simranapi/master/get_units.php"
  );
  //console.log(data.data);

  return data.data;
}
// loader function for tUnit
export async function loader() {
  const units_data = await getUnitData();
  console.log(units_data);
  return units_data;
}

// main function====================================
export default function Unit() {
  const units_data = useLoaderData();
  const [contacts, setContacts] = useState(units_data);
  const [showclass, setShowClass] = useState("noshow");
  console.log(`contacts222:`);
  console.log(contacts);
  const chkstat = {};
  contacts.forEach((val, ind) => {
    console.log(`v:${val.id}::i:${ind}`);
    chkstat[val.id] = false;
  });

  console.log("-----");
  console.log(chkstat);
  const [chkstat2, setChkStat2] = useState(chkstat);

  // contacts.map((d) => {
  //   d.checkid = false;
  // });
  const navigate = useNavigate();

  const addNew = async () => {
    const id2 = await new_contact();
    console.log(`id2:${id2}`);

    return navigate(`${id2}/Edit`);
    //return null;
  };
  const showCl = () => {
    const sh = showclass === "noshow" ? "nowshow" : "noshow";
    setShowClass(sh);
  };

  const leadSet = (event) => {
    let c = {};
    Object.keys(chkstat2).forEach((key) => {
      console.log(key);
      c[key] = event.target.checked;
    });
    console.log(`c:`);
    console.log(c);
    setChkStat2(c);
  };
  const setTick = (contact, event, data) => {
    console.log(event);
    console.log(data);
    console.log(`contact:`);
    console.log(contact.id);
    console.log(chkstat2);
    chkstat2[contact.id] = data.checked;
    console.log(contact);
    console.log(chkstat2);
    console.log("cccccccccc");
    const c = {
      ...chkstat2,
    };
    console.log(c);
    setChkStat2(c);
  };
  const delObj = () => {
    console.log(chkstat2);
    let t = [];
    Object.keys(chkstat2).forEach((key) => {
      if (chkstat2[key]) t.push(key);
    });
    console.log(`t::::`);
    console.log(t);
  };
  async function loaderPage(pageno) {
    const loader_val = await axios.get(
      `https://arya-erp.in/simranapi/get_contact_page.php?pageno=${pageno}`
    );
    //console.log(`loader_val:`);
    //console.log(typeof loader_val.data);
    console.log(loader_val.data);

    return loader_val.data;
  }
  const pageChange = async (event, data) => {
    console.log(event.target);
    console.log("pagenno:");
    console.log(event.target.text);
    console.log(data.activePage);
    const t = await loaderPage(data.activePage);
    console.log(`t`);
    console.log(t);
    setContacts(t);
  };

  const show_record = (id) => {
    console.log(`id:${id}`);

    navigate(`${id}`);
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
      <div>
        <Button color="teal" onClick={showCl}>
          Modify
        </Button>
        <Button color="red" className={showclass} onClick={delObj}>
          Delete
        </Button>
        <Button primary onClick={addNew} className={showclass}>
          Add New
        </Button>
      </div>
      <Grid verticalAlign="middle">
        {/* <GridRow centered color="blue" style={{ fontWeight: "900" }}>
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
        </GridRow> */}
        <GridRow centered>
          <Table style={{ maxWidth: "900px" }} celled>
            <TableHeader>
              <TableRow>
                <Table.HeaderCell className={showclass}>
                  <input type="checkbox" onChange={(event) => leadSet(event)} />
                </Table.HeaderCell>
                <TableHeaderCell>Unit Name</TableHeaderCell>
                <TableHeaderCell>Short Name</TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {units_data.map((contact) => (
                <Table.Row
                  onClick={() => show_record(contact.id)}
                  key={contact.id}
                >
                  <Table.Cell className={showclass}>
                    <Checkbox
                      checked={chkstat2[contact.id]}
                      onChange={(event, data) => setTick(contact, event, data)}
                      name={contact.id}
                    />
                  </Table.Cell>
                  <Table.Cell>{contact.unit_name}</Table.Cell>
                  <Table.Cell>{contact.short_name}</Table.Cell>
                </Table.Row>
              ))}
            </TableBody>
          </Table>
        </GridRow>
        <GridRow>
          <Pagination
            defaultActivePage={1}
            totalPages={3}
            onPageChange={pageChange}
          />
        </GridRow>
        <GridRow>
          <Unitpara />
        </GridRow>
      </Grid>
    </div>
  );
}
