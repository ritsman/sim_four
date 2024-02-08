import { useLoaderData, Form, redirect } from "react-router-dom";
import { Input, Table, Button, Grid, GridRow } from "semantic-ui-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

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
  const contact = useLoaderData();
  console.log(`contact::`);
  console.log(contact);

  return (
    <>
      <h2>Party-Edit</h2>
    </>
  );
}
