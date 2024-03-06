
import{ Form, useActionData, } from "react-router-dom";
import React from 'react';
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
import Validation from "../Validation";

export async function action({request,param}) {
    // console.log(request)

    const formdata=await request.formData();
    const updates = Object.fromEntries(formdata);
    console.log('Form Data:', updates);
    const validationErrors = Validation(updates);
    return validationErrors; 
}

export default function LocationForm() {
    const validationData = useActionData(); 

   
        
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
        <Form method="post" className=''>
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
                                <TableCell  ><Input  placeholder='Unit Name*' name='unit_name' style= {input_width}  error={validationData?.unit_name} />
                                </TableCell>
                                <TableCell  > 
                                <div className='p_10'>
                                <TextArea  name='description' placeholder='Description*' style={{ minHeight: 80 }} error={validationData?.Description} />
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
