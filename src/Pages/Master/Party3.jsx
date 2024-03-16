import { useState } from "react";
//import data from "../../Data/data";
import "../../css/Master/master.css";
import axios from "axios";

const header = ["Name", "Address", "Phone Number", "E-mail"];
async function loaderP() {
  const loader_val = await axios.get("https://arya-erp.in/index1.php");
  //console.log(`loader_val:`);
  //console.log(typeof loader_val.data);
  //console.log(loader_val.data);

  return loader_val.data;
}
const data = await loaderP();
console.log("data...");
console.log(data);
export default function Party() {
  console.log(data);
  const [contacts, setContacts] = useState(data);
  const [showclass, setShowClass] = useState("noshow");

  const chkstat = {};
  let i = 1;
  for (i = 1; i <= contacts.length; i++) {
    chkstat[i] = false;
  }
  chkstat[3] = true;
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
    setChkStat2(c);
  };
  const setTick = (contact, event) => {
    //console.log(event);
    console.log(`contact:`);
    console.log(contact);
    chkstat2[contact.id] = event.target.checked;
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
  return (
    <div>
      <button onClick={showCl}>Select for delete</button>
      <button className={showclass} onClick={delObj}>
        Delete
      </button>
      <table>
        <thead>
          <tr>
            <th className={showclass}>
              <input type="checkbox" onChange={(event) => leadSet(event)} />
            </th>
            {header.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td className={showclass}>
                <input
                  type="checkbox"
                  checked={chkstat2[contact.id]}
                  onChange={(event) => setTick(contact, event)}
                  name={contact.id}
                />
              </td>
              <td>{contact.fullName}</td>
              <td>{contact.address}</td>
              <td>{contact.phoneNumber}</td>
              <td>{contact.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
