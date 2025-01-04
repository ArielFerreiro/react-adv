import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';

import '../styles/styles.css';  

export const RegisterPage = () => {

    const {formData, onChange, resetForm, isValidEmail, name, email, password, repeatPassword} = useForm({
        name: '',
        email: '',
        password: '',
        repeatPassword: '',
    });

    const onSubmit = (event: FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
        console.log(formData);
    }

    return (
        <div>
            <h1> Register Page </h1>
            <form noValidate>
                <input name="name" type="text" placeholder="Name" value={name} onChange={onChange} className={ `${ name.trim().length <= 0 && 'has-error'}`} />
                { name.trim().length <= 0 && <span>Name is required</span> }
                <input name="email" type="email" placeholder="Email" value={email} onChange={onChange} className={ `${ !isValidEmail(email) && 'has-error'}`}/>
                { !isValidEmail(email) && <span>Email is required</span> }
                <input name="password" type="password" placeholder="Password" value={password} onChange={onChange} />
                { password.trim().length <6 && password.trim().length > 0 && <span>Password is required with at least 6 characters</span> }

                <input name="repeatPassword" type="password" placeholder="Repeat Password" value={repeatPassword} onChange={onChange} />
                { repeatPassword.trim().length <= 0 &&  password !== repeatPassword && <span>Repeat password must match with password!</span> }

                <button type="submit" onClick={onSubmit}>Create</button>
                <button type="button" onClick={resetForm}>Reset Form</button>
            </form>
        </div>
    )
}

export default RegisterPage
