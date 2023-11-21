import { Formik, Field, ErrorMessage } from 'formik';
import { Button, Label, StyledForm } from './PhoneBookForm.styled';
// import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsOperation';

// const phoneBookSchema = Yup.object({
//   name: Yup.string().required('Required!').min(2, 'Too short!'),
//   number: Yup.number().required('Required!').min(10, 'Too short!'),
// });

export const PhoneBookForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  return (
    <div>
      <h1>Phonebook</h1>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        // validationSchema={phoneBookSchema}
        onSubmit={(values, form) => {
          const isContactInBook = contacts.find(
            contact => contact.name === values.name
          );
          if (isContactInBook) {
            alert(`${values.name} is already in contacts.`);
          } else {
            dispatch(addContact(values));
          }
          form.resetForm();
        }}
      >
        <StyledForm>
          <Label>
            <label>Name</label>
            <Field type="name" name="name" required />
            <ErrorMessage name="name" component="div" />
          </Label>

          <Label>
            <label>Number</label>
            <Field type="phone" name="phone" required />
            <ErrorMessage name="phone" component="div" />
          </Label>

          <Button type="submit">Add contact</Button>
        </StyledForm>
      </Formik>
    </div>
  );
};
