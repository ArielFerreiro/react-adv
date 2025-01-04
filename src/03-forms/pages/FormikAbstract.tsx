import {Formik, Form} from 'formik';
import * as Yup from 'yup';

import { MyTextInput, MySelect, MyCheckBox } from '../components/';

import '../styles/styles.css';

export const FormikAbstract = () => {

    return (
        <div>
            <h1>Formik Abstract Tutorial</h1>

            <Formik 
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: '',
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    lastName: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                    terms: Yup.boolean()
                        .oneOf([true], 'You must accept the terms and conditions'),
                    jobType: Yup.string()
                        .oneOf(['designer', 'development', 'product', 'other'], 'Invalid Job Type')
                        .required('Required'),
                })}
            >
                {
                    //(formik) => (
                        <Form>

                            <MyTextInput label="First Name" name='firstName' placeholder='Enter your name' />
                            <MyTextInput label="Last Name" name='lastName' placeholder='Enter your last name' />
                            <MyTextInput label="Email" name='email' type='email' placeholder='Enter your email' />

                            <MySelect label="Job Type" name="jobType">
                                <option value="">Select a job type</option>
                                <option value="designer">Designer</option>
                                <option value="development">Developer</option>
                                <option value="product">Product Manager</option>
                                <option value="other">Other</option>                            
                            </MySelect>

                            <MyCheckBox label="Accept Terms and Conditions" name="terms" />

                            <button type="submit">Submit</button>
                        </Form>
                   // )
                }

            </Formik>
        </div>
    )
}

export default FormikAbstract
