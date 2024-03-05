import React, {useState} from 'react'
import { Form } from "react-router-dom";
import '../../master/master-common.css'
import {
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
    Input,
    Table,
    Button,
    IconGroup,
} from 'semantic-ui-react'
import Validation from '../../master/Validation';

    export default function Unitpara(){
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
        };
        return(
    <>
        <div className='center_box'>
        <Form method="post" className='' onSubmit={handleSubmit}>
            <div className='table-responsive'>
           <h6 className='main_head'>Edit Item</h6>
                <Table celled striped className='table-responsive tableStyle'>
                    <TableHeader>
                        <TableRow className='tableStyle'>
                            <TableHeaderCell className='icons_cell'><Button className='plus_button'><Icon className='plus' name="plus" onClick={()=>{}}/></Button></TableHeaderCell>
                            <TableHeaderCell>Unit Name</TableHeaderCell>
                            <TableHeaderCell >Short Name</TableHeaderCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {/* {data.map((ele) => */}
                            <TableRow > 
                                <TableCell className='icons_cell'><Button className='plus_button'> <Icon className='close_btn' name="close" onClick={()=>{}}/></Button></TableCell>
                                <TableCell  ><Input placeholder='Unit Name*' name='unit_name' className='input_width' error={errors.unit_name} /></TableCell>
                                <TableCell  colSpan='3'><Input placeholder='Short Name*' name='unit_shortname' className='input_width' error={errors.unit_shortname}/></TableCell>
                            </TableRow>
                            
                        {/* )} */}
                    </TableBody>
                </Table>

                <div className='text-center'>
                <Button primary className='mt_10'>Submit</Button>
                <Button primary>cancel</Button>
                </div>
            </div>
        </Form>
        </div>
    </>
)}