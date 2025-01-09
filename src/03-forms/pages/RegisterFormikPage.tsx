import {Formik, Form} from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';  
import { MyTextInput } from '../components';

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register Formik Page</h1>

            <Formik 
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    repeatPassword: '',
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .min(2, 'Must be 2 characters or more')
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                    password: Yup.string()
                        .min(6, 'Password must be at least 6 characters')
                        .required('Required'),
                    repeatPassword: Yup.string()
                        .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
                        .required('Required'),
                })}
            >
                {
                    ({ handleReset }) => (
                        <Form>

                            <MyTextInput label="Name" name='name' placeholder='Enter your name' />
                            <MyTextInput label="Email" name='email' type='email' placeholder='Enter your email' />
                            <MyTextInput label="Password" name='password' type='password' placeholder='Enter your password' />
                            <MyTextInput label="Repeat Password" name='repeatPassword' type='password' placeholder='Repeat your password' />

                            <button type="submit">Submit</button>
                            <button type="button" onClick={handleReset}>Reset</button>

                        </Form>
                    )
                }

            </Formik>
        </div>

    )
}

export default RegisterFormikPage
