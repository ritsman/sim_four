
import React from 'react'
import { Form } from "react-router-dom";
import './Unitpara.css'
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
// const data = [
//     {
//         main: 'KILOGRAM',
//         symb: "KGS"
//     },  
// ];

// add row 

// const [tableRows, setTableRows] = useState(["TableRow"]);
// const [counter, setCounter] = useState(1);

// function addRow() {
//     setCounter(counter + 1);
//     setTableRows([...tableRows, `TableRow ${counter + 1}`]);
// }





// const Unitpara = () => (
    export default function Unitpara(){
       const plus = {
        // background:'blue',
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
        // padding:'20px',
       };
       const icons_cell={
        width:'50px',
       };
       const input_width={
        width:'100%',
       };

  
        return(
    <>
        <div className='center_box'>
        <Form method="post" className=''>
            <div className='table-responsive'>
           {/* <div className=''> */}
           <h6 className='main_head'>Edit Item</h6>
           {/* </div> */}

                <Table celled striped style={tableStyle} className='table-responsive'>
                    <TableHeader>
                        <TableRow style={tableStyle}>
                            <TableHeaderCell style={icons_cell} ><Button style={plus_button}><Icon className='plus' name="plus" onClick={()=>{}}/></Button></TableHeaderCell>
                            <TableHeaderCell>Unit Name</TableHeaderCell>
                            <TableHeaderCell >Short Name</TableHeaderCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {/* {data.map((ele) => */}
                            <TableRow > 
                                <TableCell style={icons_cell}><Button style={plus_button}> <Icon className='close_btn' name="close" onClick={()=>{}}/></Button></TableCell>
                                <TableCell  ><Input placeholder='Unit Name*' name='unit_name' style={input_width} /></TableCell>
                                <TableCell  colSpan='3'><Input placeholder='Short Name*' name='unit_shortname' style={input_width} /></TableCell>
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