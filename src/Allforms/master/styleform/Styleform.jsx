import React from 'react'
import { Form,  useActionData } from 'react-router-dom'
// import '../commoncss/common.css'
// import './styleform.css'
import '../../master/master-common.css'
import Validation from '../Validation'
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
    { key: 'supplier', value: 'supplier', text: 'supplier' },
    { key: 'vender', value: 'vender', text: 'venders' },
    { key: 'Buyer', value: 'Buyer', text: 'Buyer' }
]


export async function action({request,param}) {
    // console.log(request)

    const formdata=await request.formData();
    const updates = Object.fromEntries(formdata);
    console.log('Form Data:', updates);
    const validationErrors = Validation(updates);
    return validationErrors;}
export default function Styleform() {
    const validationData = useActionData(); 

    return (
        <>
            <div className='item_form'>
                <Form method="post" >
                <div className='top_style'>
                    <label htmlFor="">Style :</label>
                    <Input name='style_id' placeholder='Style Id' error={validationData?.style_id} />
                </div>
                    <h6 className='pl_10'>General</h6>
                    <Table celled striped>
                        <TableBody>
                            <TableRow>
                                <TableCell ><Input placeholder='Style Name*' name='style_name' className='form__input' error={validationData?.style_name}  /></TableCell>
                                <TableCell><Input  name='ref_name' placeholder='Ref Name*' error={validationData?.ref_name}  /></TableCell>
                                <TableCell ><Input name='season' placeholder='Season*'error={validationData?.season} /></TableCell>
                                <TableCell><Input name='style_categor' placeholder='Category*'error={validationData?.style_categor}  /></TableCell>
                            </TableRow>
                            <TableRow>
                                
                                <TableCell><Input name='designer' placeholder='Designer*'error={validationData?.designer}  /></TableCell>
                                <TableCell><Input name='misc1' placeholder='MISC 1*' error={validationData?.misc1}  /></TableCell>
                                <TableCell ><Input name='misc2' placeholder='MISC 2*' error={validationData?.misc2}  /></TableCell>
                                <TableCell><Input name='misc3' placeholder='MISC 3*' error={validationData?.misc3}  /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell ><Input name='misc4' placeholder='MISC 4*' error={validationData?.misc4}  /></TableCell>
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
