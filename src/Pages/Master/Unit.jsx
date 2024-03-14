import axios from "axios";
import React, { useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { getPageInfo, getPageData, putNewId } from "../../Double/fun";
import MasterUrl from "../../Consts/Master/MasterUrl.const";
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
import "../../css/Master/master.css";

const records_per_page = 10;
//get total no of pages from items table

const totalRecords = await getPageInfo(axios, MasterUrl.getPageInfo, "unit");
const totalPages = Math.ceil(totalRecords / records_per_page);

// loader function for tUnit
export async function loader() {
  const data = await getPageData(
    axios,
    MasterUrl.getPageData,
    records_per_page,
    1,
    "unit"
  );
  //console.log(data);
  return data;
}
//create new entry in database and send id
//for redirection to Edit
async function new_contact() {
  const info_pages = await axios.get(
    `https://arya-erp.in/simranapi/master/party_new_contact.php?`
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
async function updateRecord(id, updates, mod2) {
  console.log(`updates`);
  console.log(updates);
  axios
    .post(
      //`https://arya-erp.in/simranapi/update_contact.php?`
      `https://arya-erp.in/simranapi/master/updateContact.php?`,
      {
        id: id,
        updates: updates,
        mod2: mod2,
      }
    )
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

// main function====================================
export default function Unit() {
  const data = useLoaderData();
  const [pageData, setpageData] = useState(data);
  const [showclass, setShowClass] = useState("noshow");
  console.log(`pageDataUnit:`);
  console.log(pageData);
  const chkstat = {};
  pageData.forEach((val, ind) => {
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
  // add id and return
  const addNew = async () => {
    const id2 = await putNewId(axios, MasterUrl.putNewId, "unit");
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
    const newpageData = await getPageData(
      axios,
      MasterUrl.getPageData,
      records_per_page,
      data.activePage,
      "items"
    );

    setpageData(newpageData);
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
              {pageData.map((contact) => (
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
            totalPages={totalPages}
            onPageChange={pageChange}
          />
        </GridRow>
      </Grid>
    </div>
  );
}
