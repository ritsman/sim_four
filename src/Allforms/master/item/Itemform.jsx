import React, {useEffect} from 'react'
import { Form } from 'react-router-dom'
import { useState } from 'react';
import {  useLoaderData,  useNavigation, useSubmit } from 'react-router-dom';
import Validation from '../../master/Validation';
import '../../master/master-common.css'
import './itemformSecond.css'
import {
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
const dropData = [
    { key: 'one', value: 'one', text: 'One' },
    { key: 'two', value: 'two', text: 'Two' },
    { key: 'three', value: 'three', text: 'Three' }
]
export default function Itemform() {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);      
        const updates = Object.fromEntries(formData);
       
        console.log('Form Data:', updates);

        // Store the form data in the component state
        setFormData(updates);

        // Perform validation
        const validationErrors = Validation(updates);
        setErrors(validationErrors);
        }
    const { contacts: initialContacts = [], q } = useLoaderData() || {};
    const navigation = useNavigation();
     const submitt = useSubmit();
     const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
          ...formData,
          [name]: value
      });
  };
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
                <Form method="post" onSubmit={handleSubmit}>
                    <h6 className='pl_10'>Edit Item</h6>
                    <Table celled striped>
                        <TableBody>
                            <TableRow>
                                <TableCell ><Input   placeholder='Item Name' name='item_name' className='form__input'  error={errors.item_name} />
                       </TableCell>
                       <TableCell>
    <div className={`select_field ${errors.item_select ? 'error' : ''}`}>
        <select name='item_select' value={formData.item_select} onChange={handleInputChange} className={errors.item_select ? 'error' : ''}>
            <option value="">Item Select</option>
            {dropData.map((option) => (
                <option key={option.key} value={option.value}>{option.text}</option>
            ))}
        </select>
    </div>
</TableCell>
                                <TableCell><Input name='item_type' placeholder='Item Type*' error={errors.item_type}  /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell ><Input  name='item_color' placeholder='Item Color*' error={errors.item_color} /></TableCell>
                                <TableCell><Input  name='item_specification' placeholder='Specification' error={errors.item_specification}  /></TableCell>
                                <TableCell><Input  name='item_moq' placeholder='MOQ*'  error={errors.item_moq} /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell ><Input  name='buffer_unit' placeholder='Buffer Unit*' error={errors.buffer_unit}  /></TableCell>
                                <TableCell><Input  name='purchase_unit' placeholder='Purchase Unit*'  error={errors.purchase_unit} /></TableCell>
                                <TableCell><Input name='issue_unit' placeholder='Issue Unit*'  error={errors.issue_unit} /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell ><Input  name='unit_calc' placeholder='1 Purchase unit =? Issue Unit*'  error={errors.unit_calc} /></TableCell>
                                <TableCell><Input  name='item_rate' placeholder='Rate*'  error={errors.item_rate} /></TableCell>
                                <TableCell><Input  name='gst' placeholder='GST*'  error={errors.gst} /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell ><Input  name='hsn_code' placeholder='HSN Code*' error={errors.hsn_code}  /></TableCell>
                                <TableCell><Input  name='opening_stock' placeholder='Opening Stock*' error={errors.opening_stock}  /></TableCell>
                                <TableCell><Input  name='item_msc1' placeholder='Msc1*'  error={errors.item_msc1} /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell ><Input name='item_msc2' placeholder='Msc2*' error={errors.item_msc2}  /></TableCell>
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
}
