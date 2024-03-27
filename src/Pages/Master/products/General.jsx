import React, { useState } from "react";
import { Form } from "react-router-dom";
import { Button, Input, Label } from "semantic-ui-react";
import axios from "axios";
import { getPageInfo, getPageData, putNewId } from "../../../Double/fun";

import { MasterUrl } from "../../../Consts/Master/MasterUrl.const";


const records_per_page = 10;

const loader=await getPageData(axios,
  MasterUrl.getPageData,
  records_per_page,
  1,
  "prodgen");

const General = ({ formData, setFormData }) => {
  const[pageData,setPageData]=useState(loader);
  console.log('prodgenpagedata:');
  console.log(pageData);
  return (
    <div>
      <Form method="post" onSubmit={submitForm}>
        <Label>Name:</Label>
        <Input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <br />
        <Label>Email:</Label>
        <Input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <Button primary>Save</Button>
      </Form>
    </div>
  );
};

export default General;
