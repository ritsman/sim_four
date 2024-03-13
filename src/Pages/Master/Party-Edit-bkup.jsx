import { useLoaderData, Form, redirect, useNavigate } from "react-router-dom";
/* import the AutoComplete dependency styles */
import * as React from "react";

import "../../../node_modules/@syncfusion/ej2-base/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-react-inputs/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-react-dropdowns/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-base/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-calendars/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-lists/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-popups/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-react-schedule/styles/material.css";

import "semantic-ui-css/semantic.min.css";

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
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
} from "@syncfusion/ej2-react-schedule";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useState } from "react";
//import Partyform from "./Partyform";
import Partyform from "../../Allforms/master/party/Partyform";

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
  const data = [
    {
      Id: 1,
      Subject: "Demo Presentation for native",
      Location: "Office",
      StartTime: new Date(2024, 1, 28, 9, 30),
      EndTime: new Date(2024, 1, 29, 10, 30),
      RecurrenceRule: "FREQ=DAILY;COUNT=1",
    },
  ];
  const eventSettings = { dataSource: data };
  return (
    <div>
      <ScheduleComponent height="650px" eventSettings={eventSettings}>
        <ViewsDirective>
          <ViewDirective option="Day" />
          <ViewDirective option="Week" />
          <ViewDirective option="WorkWeek" />
          <ViewDirective option="Month" />
          <ViewDirective option="Agenda" />
        </ViewsDirective>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    </div>
  );
}
