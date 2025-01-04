import {FormikErrors, useFormik} from 'formik';

import '../styles/styles.css';


interface formValues {
    firstName: string; 
    lastName: string;
    email: string;    
}

export const FormikBasicPage = () => {

    const validate = ( values: formValues ) => {
        const errors: FormikErrors<formValues> = {} ;

        if (!values.firstName) {
            errors.firstName = 'First Name is Required';
        } else if (values.firstName.length > 15) {
            errors.firstName = 'Must be 15 characters or less';
        }

        if (!values.lastName) {
            errors.lastName = 'Last Name is Required';
        }else if (values.lastName.length > 10) {
            errors.lastName = 'Must be 10 characters or less';
        }

        if (!values.email) {
            errors.email = 'Email is Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email format';
        }

        return errors;
    }

    const {handleChange, handleBlur, handleSubmit, values, errors, touched} = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
        validate
    });

    return (
        <div>
            <h1>Formik Basic Tutorial</h1>

            <form noValidate onSubmit={handleSubmit}>

                <label  htmlFor="firstName">First Name</label>
                <input 
                    id="firstName" 
                    name="firstName" 
                    type="text"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                { touched.firstName && errors.firstName && <span> { errors.firstName } </span>}

                <label  htmlFor="lastName">Last Name</label>
                <input 
                    id="lastName" 
                    name="lastName" 
                    type="text"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                { touched.lastName &&  errors.lastName && <span> { errors.lastName } </span>}

                <label  htmlFor="email">Email</label>
                <input 
                    id="email" 
                    name="email" 
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                { touched.email &&  errors.email && <span> { errors.email } </span>}


                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

export default FormikBasicPage
