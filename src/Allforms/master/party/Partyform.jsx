import React, { useState } from 'react'
import { Form } from 'react-router-dom'
// import '../commoncss/common.css'
import '../../master/master-common.css'
import Validation from '../../master/Validation';

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

export default function Partyform() {
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

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
        // Validate the form data

    }


    return (
        <>
            <div className='item_form'>
                <Form method="post" onSubmit={handleSubmit} >
                    <h6 className='pl_10'>Edit Item</h6>
                    <Table celled striped>
                        <TableBody>
                            <TableRow>
                                <TableCell ><Input placeholder='Company Name*' name='comp_name' className='form__input' error={errors.comp_name} />

                                </TableCell>

                                <TableCell><Input name='email' placeholder='Email*' error={errors.email} /> </TableCell>

                                <TableCell ><Input name='bank' placeholder='Bank*' error={errors.bank} />

                                </TableCell>

                            </TableRow>
                            <TableRow>

                                <TableCell><Input name='contact_person' placeholder='Contact Person*' error={errors.contact_person} />
                                </TableCell>
                                <TableCell><Input name='landline' placeholder='Landline*' error={errors.landline} />
                                </TableCell>
                                <TableCell ><Input name='account' placeholder='Account*' error={errors.account} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell ><Input name='address' placeholder='Address*' error={errors.address} />
                                </TableCell>
                                <TableCell><Input name='mobile' placeholder='Mobile*' error={errors.mobile} />
                                </TableCell>
                                <TableCell><Input name='ifsc' placeholder='IFSC*' error={errors.ifsc} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell ><Input name='city' placeholder='city*' error={errors.city} />
                                </TableCell>
                                <TableCell><Input name='gst' placeholder='GST*' error={errors.gst} />
                                </TableCell>
                                <TableCell><Input name='opening_balance' placeholder='Opening Balance*' error={errors.opening_balance} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell ><Input name='state' placeholder='State*' error={errors.state} />

                                </TableCell>
                                <TableCell><Input name='pan' placeholder='PAN*' error={errors.pan} />
                                </TableCell>
                                <TableCell><Input name='pin' placeholder='Pin*' error={errors.pin} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><Input name='pin' placeholder='Pin*' error={errors.pin} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                {/* <TableCell>
                                    <div className='select_field'>
                                        <Select name='item_select' placeholder='Item Select' options={dropData}  error={errors.item_select} />
                                       
                                    </div>
                                </TableCell> */}
                                <TableCell>
                                    <div className={`select_field ${errors.item_select ? 'error' : ''}`}>
                                        <select name='item_select' value={formData.item_select} onChange={handleInputChange} className={errors.item_select ? 'error' : ''}>
                                            <option value="">Item Select</option>
                                            {dropData.map((option) => (
                                                <option key={option.key} value={option.value}>{option.text}</option>
                                            ))}
                                        </select>
                                    </div>
                                </TableCell>


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
