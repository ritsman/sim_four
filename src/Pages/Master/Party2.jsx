import { useState } from "react";
import data from "../../Data/data";
import "../../css/Master/master.css";

const header = ["Name", "Address", "Phone Number", "E-mail"];
export default function Party() {
  console.log(data);
  const [contacts, setContacts] = useState(data);
  const [showclass, setShowClass] = useState("noshow");
  const [leadCheck, setLeadCheck] = useState(false);

  const showCl = () => {
    const sh = showclass === "noshow" ? "nowshow" : "noshow";
    setShowClass(sh);
  };

  const leadSet = () => {
    setLeadCheck(!leadCheck);
  };
  const setTick = (e) => {
    setLeadCheck(e.target.checked);
  };
  return (
    <div>
      <button onClick={showCl}>Select for delete</button>
      <button className={showclass}>Delete</button>
      <table>
        <thead>
          <tr>
            <th className={showclass}>
              <input type="checkbox" onChange={leadSet} />
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
                  checked={leadCheck}
                  onChange={setTick}
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
