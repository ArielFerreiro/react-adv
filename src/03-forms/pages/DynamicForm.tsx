import {Formik, Form} from 'formik';

import formJson from '../data/custom-form.json';
import { MySelect, MyTextInput } from '../components';
import * as Yup from 'yup';

const initialValues: {[key: string]: any} = {};
const requiredFields: {[key: string]: any} = {};

formJson.forEach(({name, value, validations}) => {
  initialValues[name] = value;

  if (validations) {
    let schema = Yup.string();
    for (const validation of validations) {
      if (validation.type === 'required') {
        schema = schema.required(validation.message);
      }
      if (validation.type === 'email') {
        schema = schema.email(validation.message);
      }
      if (validation.type === 'minLength') {
        schema = schema.min((validation as any).value || 1, validation.message);
      }
      if (validation.type === 'maxLength') {
        schema = schema.max((validation as any).value || 100, validation.message);
      }

    }
    requiredFields[name] = schema;
  }

});

const validationSchema = Yup.object({ ...requiredFields});

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log('values', values);
        }}
      >
        { (formik) => (
            <Form noValidate>
              {formJson.map(({type, name, placeholder, label, options}) => {

                if( type === 'input' || type === 'password' || type === 'email' ) {
                  return (
                    <MyTextInput 
                        key={name}
                        type={ (type as any) } 
                        name={name} 
                        label={label} 
                        placeholder={placeholder} />
                  );
                } else if( type === 'select' ) {
                  return (
                    <MySelect key={name} name={name} label={label}>
                      <option value="">Select an option</option>
                      {options?.map((option) => (
                        <option key={option.id} value={option.id}>{option.label}</option>
                      ))}
                    </MySelect>
                  );
                }


                throw new Error(`Unknown type: ${type}`);

              })}
              <button type="submit">Submit</button>
            </Form>
          )
        }

      </Formik>
    </div>
  )
}

export default DynamicForm
