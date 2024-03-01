import React from 'react'
import { Form,  } from "react-router-dom";
import { useState } from 'react'
import '../unit/Unitpara.css'
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




export default function LocationForm() {
    // const [searchParams, setSearchParams] = useSearchParams()
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
        if (!data.unit_name) {
            newErrors.unit_name = "Item Name is required";
        } 
        if (!data.description) {
            newErrors.description = "Item Name is required";
        } 
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
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
    //    const close = {
    //     width:'30px',
    //     height:'30px',
    //     borderRadius:'50%',
    //     display:'flex',
    //     justifyContent:'center',
    //     alignItems:'center',
    //    };
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
           {/* <div className=''> */}
           <h6 className='main_head'>Edit Item</h6>
           {/* </div> */}

                <Table celled striped style={tableStyle} className='table-responsive'>
                    <TableHeader>
                        <TableRow style={tableStyle}>
                            <TableHeaderCell style={icons_cell} ><Button style={plus_button}><Icon className='plus' name="plus" onClick={()=>{}}/></Button></TableHeaderCell>
                            <TableHeaderCell>Location Name</TableHeaderCell>
                            <TableHeaderCell >Description</TableHeaderCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {/* {data.map((ele) => */}
                            <TableRow > 
                                <TableCell style={icons_cell}><Button style={plus_button}> <Icon className='close_btn' name="close" onClick={()=>{}}/></Button></TableCell>
                                <TableCell  ><Input error={errors.unit_name} placeholder='Unit Name*' name='unit_name' style={input_width} /></TableCell>
                                <TableCell  > 
                                <div className='p_10'>
                                <TextArea error={errors.description} name='description' placeholder='Description*' style={{ minHeight: 80 }} />
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
