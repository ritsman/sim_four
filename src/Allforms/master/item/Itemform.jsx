<<<<<<< HEAD
import React from "react";
import { Form, useSearchParams } from "react-router-dom";
// import React, { useState } from "react";
//import "./itemform.css";
//import '../commoncss/common.css'
//import "../../master/master-common.css";
=======
import React, {useEffect} from 'react'
import { Form, useActionData } from 'react-router-dom'
>>>>>>> b5b4880a091b5c162d4323535f199ba6492647c8

import {  useLoaderData,  useNavigation, useSubmit } from 'react-router-dom';
import Validation from '../Validation';
import '../../master/master-common.css'
import './itemformSecond.css'
import {
<<<<<<< HEAD
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Icon,
  Input,
  Table,
  Button,
  Select,
} from "semantic-ui-react";
import { useState } from "react";

// const [error, setError] = useState({});

// const validateForm = () => {
//     let isValid = true;
//     const newErrors = {};

//     if (newPatient.name === "") {
//         newErrors.name = "Name is required";
//         isValid = false;
//     }

//     if (newPatient.age === "") {
//         newErrors.age = "Age is required";
//         isValid = false;
//     }
//     if (newPatient.gender === "") {
//         newErrors.gender = "gender is required";
//         isValid = false;
//     }

//     setError(newErrors);
//     return isValid;
// };

=======
    TableRow,
    TableHeaderCell,
    TableHeader,
    TableCell,
    TableBody,
    Icon,
    Input,
    Table,
    Button,
    Select,
} from 'semantic-ui-react'
>>>>>>> b5b4880a091b5c162d4323535f199ba6492647c8
const dropData = [
  { key: "one", value: "one", text: "One" },
  { key: "two", value: "two", text: "Two" },
  { key: "three", value: "three", text: "Three" },
];


export async function action({request,param}) {
  // console.log(request)

  const formdata=await request.formData();
  const updates = Object.fromEntries(formdata);
  console.log('Form Data:', updates);
  const validationErrors = Validation(updates);
  return validationErrors; }
export default function Itemform() {
<<<<<<< HEAD
  const [searchParams, setSearchParams] = useSearchParams();
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updates = Object.fromEntries(formData);
    console.log("Form Data:", updates);
    if (validateForm(updates)) {
    }
  };
  const validateForm = (data) => {
    const newErrors = {};
    if (!data.item_name) {
      newErrors.item_name = "Item Name is required";
    }
    if (!data.item_type) {
      newErrors.item_type = "Item Name is required";
    }
    if (!data.item_color) {
      newErrors.item_color = "Item Name is required";
    }
    if (!data.item_specification) {
      newErrors.item_specification = "Item Name is required";
    }
    if (!data.item_moq) {
      newErrors.item_moq = "Item Name is required";
    }
    if (!data.buffer_unit) {
      newErrors.buffer_unit = "Item Name is required";
    }
    if (!data.purchase_unit) {
      newErrors.purchase_unit = "Item Name is required";
    }
    if (!data.issue_unit) {
      newErrors.issue_unit = "Item Name is required";
    }
    if (!data.unit_calc) {
      newErrors.unit_calc = "Item Name is required";
    }
    if (!data.item_rate) {
      newErrors.item_rate = "Item Name is required";
    }
    if (!data.item_gst) {
      newErrors.item_gst = "Item Name is required";
    }
    if (!data.hsn_code) {
      newErrors.hsn_code = "Item Name is required";
    }
    if (!data.opening_stock) {
      newErrors.opening_stock = "Item Name is required";
    }
    if (!data.item_msc1) {
      newErrors.item_msc1 = "Item Name is required";
    }
    if (!data.item_msc2) {
      newErrors.item_msc2 = "Item Name is required";
    }
    if (!data.item_sel1) {
      newErrors.item_sel1 = "Please select an item";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <>
      <div className="searchField">
        <Form method="post">
          <Table celled striped>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Input
                    placeholder="search"
                    name="search_field"
                    className="search_f"
                    onChange={(e) => setSearchParams({ q: e.target.value })}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="text-left">
            <Button primary className="mr_10">
              Search
            </Button>
          </div>
        </Form>
      </div>
      <div className="item_form">
        <Form method="post" onSubmit={handleSubmit}>
          <h6 className="pl_10">Edit Item</h6>
          <Table celled striped>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Input
                    error={errors.item_name}
                    placeholder="Item Name"
                    name="item_name"
                    className="form__input"
                  />
                </TableCell>
                <TableCell>
                  <div className="select_field">
                    <Select
                      error={errors.item_sel1}
                      placeholder="Item Select"
                      name="item_sel1"
                      options={dropData}
                    />
                  </div>
                </TableCell>
                <TableCell>
                  <Input
                    error={errors.item_type}
                    name="item_type"
                    placeholder="Item Type*"
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Input
                    error={errors.item_color}
                    name="item_color"
                    placeholder="Item Color*"
                  />
                </TableCell>
                <TableCell>
                  <Input
                    error={errors.item_specification}
                    name="item_specification"
                    placeholder="Specification"
                  />
                </TableCell>
                <TableCell>
                  <Input
                    error={errors.item_moq}
                    name="item_moq"
                    placeholder="MOQ*"
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Input
                    error={errors.buffer_unit}
                    name="buffer_unit"
                    placeholder="Buffer Unit*"
                  />
                </TableCell>
                <TableCell>
                  <Input
                    error={errors.purchase_unit}
                    name="purchase_unit"
                    placeholder="Purchase Unit*"
                  />
                </TableCell>
                <TableCell>
                  <Input
                    error={errors.issue_unit}
                    name="issue_unit"
                    placeholder="Issue Unit*"
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Input
                    error={errors.unit_calc}
                    name="unit_calc"
                    placeholder="1 Purchase unit =? Issue Unit*"
                  />
                </TableCell>
                <TableCell>
                  <Input
                    error={errors.item_rate}
                    name="item_rate"
                    placeholder="Rate*"
                  />
                </TableCell>
                <TableCell>
                  <Input
                    error={errors.item_gst}
                    name="item_gst"
                    placeholder="GST*"
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Input
                    error={errors.hsn_code}
                    name="hsn_code"
                    placeholder="HSN Code*"
                  />
                </TableCell>
                <TableCell>
                  <Input
                    error={errors.opening_stock}
                    name="opening_stock"
                    placeholder="Opening Stock*"
                  />
                </TableCell>
                <TableCell>
                  <Input
                    error={errors.item_msc1}
                    name="item_msc1"
                    placeholder="Msc1*"
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Input
                    error={errors.item_msc2}
                    name="item_msc2"
                    placeholder="Msc2*"
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="text-center">
            <Button primary className="mr_10">
              Submit
            </Button>
            <Button primary>Cancel</Button>
          </div>
        </Form>
      </div>
    </>
  );
=======
  const validationData = useActionData(); 

    
    const { contacts: initialContacts = [], q } = useLoaderData() || {};
    const navigation = useNavigation();
     const submitt = useSubmit();
     
    if (!initialContacts) {
        return <div>Loading...</div>;
      } 
    const searching =
      navigation.location &&
      new URLSearchParams(navigation.location.search).has("q");
      useEffect(() => {
        const inputElement = document.getElementById("q");
        if (q) {
          inputElement.value = q;
        } else {
          inputElement.value = ""; // Clear the input field if q is not present
        }
      }, [q]);
    const handleSubmitt = (e) => {
      e.preventDefault();
      const formDataa = new FormData(e.target);
      const searchQuery = formDataa.get("q");
      submitt({ q: searchQuery });
    };
    const Contacts = [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Smith" },
      { id: 3, name: "Alice Johnson" },
      { id: 4, name: "Bob Brown" },
      { id: 5, name: "Emily Davis" }
    ];
    return (
        <>
<div id="sidebar">
        {/* <h1>React Router Contacts</h1> */}
        <div className='newSearch'>
          {/* Search form */}
          <Form id="search-form" role="search" onSubmit={handleSubmitt}>
            <input
              id="q"
              className={searching ? "loading" : ""}
              placeholder="Search "
              name="q"
            />
            {/* Display spinner while searching */}
            {searching && <div id="search-spinner" aria-hidden />}
            <button type="submit">Search</button>
          </Form>
        </div>  
      </div>   
            <div className='item_form'>
                <Form method="post" >
                    <h6 className='pl_10'>Edit Item</h6>
                    <Table celled striped>
                        <TableBody>
                            <TableRow>
                                <TableCell ><Input   placeholder='Item Name' name='item_name' className='form__input' error={validationData?.item_name} />
                       </TableCell>
                       <TableCell>
    <div className={`select_field ${validationData?.item_select ? 'error' : ''} ` }>
        <select name='item_select' className='selecting' >
            <option value="">Item Select</option>
            {dropData.map((option) => (
                <option key={option.key} value={option.value}>{option.text}</option>
            ))}
        </select>
    </div>
</TableCell>
                                <TableCell><Input name='item_type' placeholder='Item Type*' error={validationData?.item_type}  /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell ><Input  name='item_color' placeholder='Item Color*' error={validationData?.item_color} /></TableCell>
                                <TableCell><Input  name='item_specification' placeholder='Specification' error={validationData?.item_specification}  /></TableCell>
                                <TableCell><Input  name='item_moq' placeholder='MOQ*' error={validationData?.item_moq} /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell ><Input  name='buffer_unit' placeholder='Buffer Unit*' error={validationData?.buffer_unit}    /></TableCell>
                                <TableCell><Input  name='purchase_unit' placeholder='Purchase Unit*'  error={validationData?.purchase_unit} /></TableCell>
                                <TableCell><Input name='issue_unit' placeholder='Issue Unit*'  error={validationData?.issue_unit} /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell ><Input  name='unit_calc' placeholder='1 Purchase unit =? Issue Unit*' error={validationData?.unit_calc} /></TableCell>
                                <TableCell><Input  name='item_rate' placeholder='Rate*' error={validationData?.item_rate} /></TableCell>
                                <TableCell><Input  name='gst' placeholder='GST*' error={validationData?.gst} /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell ><Input  name='hsn_code' placeholder='HSN Code*' error={validationData?.hsn_code}  /></TableCell>
                                <TableCell><Input  name='opening_stock' placeholder='Opening Stock*' error={validationData?.opening_stock} /></TableCell>
                                <TableCell><Input  name='item_msc1' placeholder='Msc1*' error={validationData?.item_msc1} /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell ><Input name='item_msc2' placeholder='Msc2*'error={validationData?.item_msc2}  /></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <div className='text-center'>
                        <Button primary className='mr_10'>Submit</Button>
                        <Button primary>Cancel</Button>
                    </div>
                </Form>
            </div>

        </>
    )
>>>>>>> b5b4880a091b5c162d4323535f199ba6492647c8
}
