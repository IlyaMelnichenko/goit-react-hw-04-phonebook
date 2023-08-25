import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { StyledForm, StyledFild, AddButton } from './StyledContactFrom';

const schema = Yup.object().shape({
  Name: Yup.string()
    .matches(/^[A-Za-zА-Яа-яЁё\s]+$/, 'Invalid name')
    .required('This is required!')
    .min(1, 'Too Short!')
    .max(50, 'Too Long!'),
  Number: Yup.string()
    .matches(/^\+?[0-9]{1,3}-?[0-9]+$/, 'Invalid number')
    .required('This is required!')
    .min(6, 'Too Short!')
    .max(20, 'Too Long!'),
});

export const ContactForm = ({ addPhoneCard }) => {
  return (
    <>
      <Formik
        initialValues={{
          Name: '',
          Number: '',
        }}
        validationSchema={schema}
        onSubmit={(value,actions) => {
          addPhoneCard({ ...value, id: nanoid() });
          actions.resetForm();
        }}
      >
        <StyledForm>
          <label>
            Name
            <StyledFild name="Name" />
            <ErrorMessage name="Name" component="div" />
          </label>
          <label>
            Number
            <StyledFild type="tel" name="Number" />
            <ErrorMessage name="Number" component="div" />
          </label>

          <AddButton type="submit">Add contact</AddButton>
        </StyledForm>
      </Formik>
    </>
  );
};
