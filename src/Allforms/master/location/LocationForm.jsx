
import { Form,  } from "react-router-dom";
import React, { useState } from 'react';
import '../unit/Unitpara.css'
// import '../../master/Validation'
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
    TextArea,
    IconGroup,
} from 'semantic-ui-react'
import Validation from '../../master/Validation';




export default function LocationForm() {
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);      
        const updates = Object.fromEntries(formData);
            console.log('Form Data:', updates);
            setFormData(updates);

            // Perform validation
            const validationErrors = Validation(updates);
            setErrors(validationErrors);
        }
    const plus = {
        color:'black !important' ,
        width:'30px',
        height:'30px',
        borderRadius:'50%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
       };
    
       const plus_button= {
        background:'transparent',
        padding:'0',
       };
       const tableStyle = {
        border: 'none !important',
       };
       const icons_cell={
        width:'50px',
       };
       const input_width={
        width:'100%',
       };
  return (
    <div className='center_box'>
        <Form method="post" onSubmit={handleSubmit} className=''>
            <div className='table-responsive'>
           <h6 className='main_head'>Edit Item</h6>
                <Table celled striped style={tableStyle} className='table-responsive'>
                    <TableHeader>
                        <TableRow style={tableStyle}>
                            <TableHeaderCell style={icons_cell} ><Button style={plus_button}><Icon className='plus' name="plus" onClick={()=>{}}/></Button></TableHeaderCell>
                            <TableHeaderCell>Location Name</TableHeaderCell>
                            <TableHeaderCell >Description</TableHeaderCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                            <TableRow > 
                                <TableCell style={icons_cell}><Button style={plus_button}> <Icon className='close_btn' name="close" onClick={()=>{}}/></Button></TableCell>
                                <TableCell  ><Input  placeholder='Unit Name*' name='unit_name' style= {input_width} error={errors.unit_name} />
                                </TableCell>
                                <TableCell  > 
                                <div className='p_10'>
                                <TextArea  name='description' placeholder='Description*' style={{ minHeight: 80 }} error={errors.description} />
                                </div>
                                </TableCell>
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
  )
}
