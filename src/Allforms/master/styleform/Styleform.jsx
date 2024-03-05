import React,{useState} from 'react'
import { Form } from 'react-router-dom'
// import '../commoncss/common.css'
// import './styleform.css'
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
import Validation from '../../master/Validation';

const dropData = [
    { key: 'supplier', value: 'supplier', text: 'supplier' },
    { key: 'vender', value: 'vender', text: 'venders' },
    { key: 'Buyer', value: 'Buyer', text: 'Buyer' }
]



export default function Styleform() {
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

    return (
        <>
            <div className='item_form'>
                <Form method="post" onSubmit={handleSubmit}>
                <div className='top_style'>
                    <label htmlFor="">Style :</label>
                    <Input name='style_id' placeholder='Style Id' error={errors.style_id}  />
                </div>
                    <h6 className='pl_10'>General</h6>
                    <Table celled striped>
                        <TableBody>
                            <TableRow>
                                <TableCell ><Input placeholder='Style Name*' name='style_name' className='form__input' error={errors.style_name}  /></TableCell>
                                <TableCell><Input  name='ref_name' placeholder='Ref Name*' error={errors.ref_name}  /></TableCell>
                                <TableCell ><Input name='season' placeholder='Season*' error={errors.season}  /></TableCell>
                                <TableCell><Input name='style_categor' placeholder='Category*' error={errors.style_categor}  /></TableCell>
                            </TableRow>
                            <TableRow>
                                
                                <TableCell><Input name='designer' placeholder='Designer*' error={errors.designer}  /></TableCell>
                                <TableCell><Input name='misc1' placeholder='MISC 1*' error={errors.misc1}  /></TableCell>
                                <TableCell ><Input name='misc2' placeholder='MISC 2*' error={errors.misc2}  /></TableCell>
                                <TableCell><Input name='misc3' placeholder='MISC 3*' error={errors.misc3}  /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell ><Input name='misc4' placeholder='MISC 4*' error={errors.misc4}  /></TableCell>
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
