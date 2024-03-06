import React from 'react'
import { Form,  useActionData, } from 'react-router-dom'
// import '../commoncss/common.css'
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
    return validationErrors;
}

export default function Partyform() {
    // const [formData, setFormData] = useState({});
    // const [errors, setErrors] = useState({});

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value
    //     });
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const formData = new FormData(e.target);
    //     const updates = Object.fromEntries(formData);
    //     console.log('Form Data:', updates);

    //     // Store the form data in the component state
    //     setFormData(updates);

    //     // Perform validation
    //     const validationErrors = Validation(updates);
    //     setErrors(validationErrors);
        // Validate the form data

    

        const validationData = useActionData(); 
    return (
        <>
            <div className='item_form'>
                <Form method="post"  >
                    <h6 className='pl_10'>Edit Item</h6>
                    <Table celled striped>
                        <TableBody>
                            <TableRow>
                                <TableCell ><Input placeholder='Company Name*' name='comp_name' className='form__input'  error={validationData?.comp_name} />

                                </TableCell>

                                <TableCell><Input name='email' placeholder='Email*'  error={validationData?.email} /> </TableCell>

                                <TableCell ><Input name='bank' placeholder='Bank*'  error={validationData?.bank} />

                                </TableCell>

                            </TableRow>
                            <TableRow>

                                <TableCell><Input name='contact_person' placeholder='Contact Person*'  error={validationData?.contact_person} />
                                </TableCell>
                                <TableCell><Input name='landline' placeholder='Landline*'  error={validationData?.landline} />
                                </TableCell>
                                <TableCell ><Input name='account' placeholder='Account*'  error={validationData?.account} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell ><Input name='address' placeholder='Address*'  error={validationData?.address} />
                                </TableCell>
                                <TableCell><Input name='mobile' placeholder='Mobile*'  error={validationData?.mobile} />
                                </TableCell>
                                <TableCell><Input name='ifsc' placeholder='IFSC*'  error={validationData?.ifsc} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell ><Input name='city' placeholder='city*'  error={validationData?.city} />
                                </TableCell>
                                <TableCell><Input name='gst' placeholder='GST*'  error={validationData?.gst} />
                                </TableCell>
                                <TableCell><Input name='opening_balance' placeholder='Opening Balance*'  error={validationData?.opening_balance} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell ><Input name='state' placeholder='State*'  error={validationData?.state} />

                                </TableCell>
                                <TableCell><Input name='pan' placeholder='PAN*' error={validationData?.pan} />
                                </TableCell>
                                <TableCell><Input name='pin' placeholder='Pin*'  error={validationData?.pin} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><Input name='pin' placeholder='Pin*'  error={validationData?.pin} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                               
                                <TableCell>
                                    <div className={`select_field ${validationData?.item_select ? 'error' : ''} `}>
                                        <select name='item_select'   className="selecting">
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
