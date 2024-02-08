import { useState } from "react";
//import data from "../../Data/data";
import { Link, useNavigate } from "react-router-dom";
import "../../css/Master/master.css";
import axios from "axios";
import {
  Table,
  Input,
  Pagination,
  Button,
  Icon,
  Checkbox,
} from "semantic-ui-react";

const header = ["Name", "Address", "Phone Number", "E-mail"];
async function get_info() {
  const info_pages = await axios.get(
    "https://arya-erp.in/simranapi/get_contacts_info.php"
  );
  console.log(info_pages.data);
  return info_pages.data;
}
async function loaderP() {
  const loader_val = await axios.get(
    "https://arya-erp.in/simranapi/get_contacts.php"
  );
  //console.log(`loader_val:`);
  //console.log(typeof loader_val.data);
  //console.log(loader_val.data);

  return loader_val.data;
}
const data = await loaderP();
console.log("data...");
console.log(data);

const totalPages = await get_info();
async function new_contact() {
  const info_pages = await axios.get(
    `https://arya-erp.in/simranapi/new_contact.php?`
  );
  console.log(info_pages.data);
  return info_pages.data;
}

export default function Party() {
  const navigate = useNavigate();
  const addNew = async () => {
    const id2 = await new_contact();
    console.log(`id2:${id2}`);
    return navigate(`${id2}`);
  };
  console.log(data);
  const [contacts, setContacts] = useState(data);
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

  return (
    <>
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

      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className={showclass}>
              <input type="checkbox" onChange={(event) => leadSet(event)} />
            </Table.HeaderCell>
            {header.map((h) => (
              <Table.HeaderCell key={h}>{h}</Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {contacts.map((contact) => (
            <Table.Row key={contact.id}>
              <Table.Cell className={showclass}>
                <Checkbox
                  //checked={chkstat2[contact.id]}
                  onChange={(event, data) => setTick(contact, event, data)}
                  name={contact.id}
                />
                <Button
                  circular
                  icon
                  as={Link}
                  to={contact.id}
                  className="mx-2"
                >
                  <Icon name="pencil" />
                </Button>
              </Table.Cell>
              <Table.Cell>{contact.firstname}</Table.Cell>
              <Table.Cell>{contact.lastname}</Table.Cell>
              <Table.Cell>{contact.phoneNumber}</Table.Cell>
              <Table.Cell>{contact.email}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Pagination
        defaultActivePage={1}
        totalPages={totalPages}
        onPageChange={pageChange}
      />
    </>
  );
}
