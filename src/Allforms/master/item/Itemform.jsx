import React from 'react'
import { Form, useSearchParams } from 'react-router-dom'
// import React, { useState } from "react";
import './itemform.css'
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
import { useState } from 'react'

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

const dropData = [
    { key: 'one', value: 'one', text: 'One' },
    { key: 'two', value: 'two', text: 'Two' },
    { key: 'three', value: 'three', text: 'Three' }
]

export default function Itemform() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [errors, setErrors] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);      
        const updates = Object.fromEntries(formData);
        console.log('Form Data:', updates);
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
            <div className='searchField'>
                <Form method="post" >            
                    <Table celled striped>
                        <TableBody>
                            <TableRow>
                                <TableCell ><Input placeholder='search' name='search_field' className='search_f' onChange={(e) => setSearchParams({q:e.target.value})} /></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <div className='text-left'>
                        <Button primary className='mr_10'>Search</Button>                    
                    </div>
                </Form>
            </div>
            <div className='item_form'>
                <Form method="post" onSubmit={handleSubmit}>

                    <h6 className='pl_10'>Edit Item</h6>
                    <Table celled striped>
                        <TableBody>
                            <TableRow>
                                <TableCell ><Input error={errors.item_name}  placeholder='Item Name' name='item_name' className='form__input'   /></TableCell>
                                <TableCell>
                                    <div className='select_field'>
                                        <Select error={errors.item_sel1} placeholder='Item Select' name='item_sel1' options={dropData} />
                                    </div>
                                </TableCell>
                                <TableCell><Input error={errors.item_type} name='item_type' placeholder='Item Type*'   /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell ><Input error={errors.item_color} name='item_color' placeholder='Item Color*'  /></TableCell>
                                <TableCell><Input error={errors.item_specification} name='item_specification' placeholder='Specification'   /></TableCell>
                                <TableCell><Input error={errors.item_moq} name='item_moq' placeholder='MOQ*'   /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell ><Input error={errors.buffer_unit} name='buffer_unit' placeholder='Buffer Unit*'   /></TableCell>
                                <TableCell><Input error={errors.purchase_unit} name='purchase_unit' placeholder='Purchase Unit*'   /></TableCell>
                                <TableCell><Input error={errors.issue_unit} name='issue_unit' placeholder='Issue Unit*'   /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell ><Input error={errors.unit_calc} name='unit_calc' placeholder='1 Purchase unit =? Issue Unit*'   /></TableCell>
                                <TableCell><Input error={errors.item_rate} name='item_rate' placeholder='Rate*'   /></TableCell>
                                <TableCell><Input error={errors.item_gst} name='item_gst' placeholder='GST*'   /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell ><Input error={errors.hsn_code} name='hsn_code' placeholder='HSN Code*'   /></TableCell>
                                <TableCell><Input error={errors.opening_stock} name='opening_stock' placeholder='Opening Stock*'   /></TableCell>
                                <TableCell><Input error={errors.item_msc1} name='item_msc1' placeholder='Msc1*'   /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell ><Input error={errors.item_msc2} name='item_msc2' placeholder='Msc2*'   /></TableCell>
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
