import React from 'react'
import { Form, useActionData, } from 'react-router-dom'
import { Button, Input } from 'semantic-ui-react'
import Validation from './Validation';

export async function action({request,param}) {
    // console.log(request)

    const formdata=await request.formData();
    const updates = Object.fromEntries(formdata);
    console.log('Form Data:', updates);
    const validationErrors = Validation(updates);
    return validationErrors; // Return validation errors
   
    // return 0;

}
const DemoForm = () => {
    const validationData = useActionData(); 
  return (
    <div>
     <Form method='post'  >
     <Input placeholder='Search...' name="name"  error={validationData?.name} />
     <Input placeholder='Search...' name="surname"  error={validationData?.surname}  />
     <Button>submit</Button>
    </Form>
    </div>
    // error= {errors?.surname}
  )
}

export default DemoForm
