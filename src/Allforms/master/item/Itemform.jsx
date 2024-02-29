import React from 'react'
import { Form } from 'react-router-dom'
// import React, { useState } from "react";
//import './itemform.css';
//import '../commoncss/common.css'
import '../../master/master-common.css'

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

    return (
        <>
            <div className='item_form'>
                <Form method="post">
                    <h6 className='pl_10'>Edit Item</h6>
                    <Table celled striped>
                        {/* <TableHeader>
                            <TableRow>
                                <TableHeaderCell >Git Repository</TableHeaderCell>
                            </TableRow>
                        </TableHeader> */}

                        <TableBody>
                            <TableRow>
                                <TableCell ><Input placeholder='Item Name2' name='item_name' className='form__input' /></TableCell>
                                <TableCell>
                                    <div className='select_field'>
                                        <Select placeholder='Item Select' options={dropData} />
                                    </div>
                                </TableCell>
                                <TableCell><Input  name='item_type' placeholder='Item Type*' /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell ><Input name='item_color' placeholder='Item Color*' /></TableCell>
                                <TableCell><Input name='item_specification' placeholder='Specification' /></TableCell>
                                <TableCell><Input name='item_moq' placeholder='MOQ*' /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell ><Input name='buffer_unit' placeholder='Buffer Unit*' /></TableCell>
                                <TableCell><Input name='purchase_unit' placeholder='Purchase Unit*' /></TableCell>
                                <TableCell><Input name='issue_unit' placeholder='Issue Unit*' /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell ><Input name='unit_calc' placeholder='1 Purchase unit =? Issue Unit*' /></TableCell>
                                <TableCell><Input name='item_rate' placeholder='Rate*' /></TableCell>
                                <TableCell><Input name='item_gst' placeholder='GST*' /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell ><Input name='hsn_code' placeholder='HSN Code*' /></TableCell>
                                <TableCell><Input name='opening_stock' placeholder='Opening Stock*' /></TableCell>
                                <TableCell><Input name='item_msc1' placeholder='Msc1*' /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell ><Input name='item_msc2' placeholder='Msc2*' /></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <div className='text-center'>
                        <Button primary className='mr_10'>Submit</Button>
                        <Button primary>cancel</Button>
                    </div>
                </Form>
            </div>

        </>
    )
}
