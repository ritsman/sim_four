import React from 'react'
import { Form, useActionData } from "react-router-dom";
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
import Validation from '../Validation';


export async function action({request,param}) {
    // console.log(request)

    const formdata=await request.formData();
    const updates = Object.fromEntries(formdata);
    console.log('Form Data:', updates);
    const validationErrors = Validation(updates);
    return validationErrors;}
    export default function Unitpara(){
        const validationData = useActionData(); 
        return(
    <>
        <div className='center_box'>
        <Form method="post" className='' >
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
                                <TableCell  ><Input placeholder='Unit Name*' name='unit_name' className='input_width'error={validationData?.unit_name} /></TableCell>
                                <TableCell  colSpan='3'><Input placeholder='Short Name*' name='unit_shortname' className='input_width' error={validationData?.unit_shortname}/></TableCell>
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