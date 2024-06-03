import { Formik, Field, Form, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

// VALIDATION
const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Min 3 chars!")
    .required("Is required!")
    .max(50, "Max 50 chars!")
    .trim(),
  number: Yup.number().required("Is required!").positive(),
});

// FORM
export default function ContactForm() {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (value, action) => {
    dispatch(addContact({ name: value.name, number: value.number }));
    action.resetForm();
  };

  return (
    <Formik
      initialValues={{ id: "", name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={UserSchema}
    >
      <Form className={css.contactForm}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field className={css.formInput} type="text" name="name" id={nameFieldId} />
        <ErrorMessage className={css.error} name="name" component="span" />
        <label htmlFor={numberFieldId}>Number</label>
        <Field className={css.formInput} type="number" name="number" id={numberFieldId} />
        <ErrorMessage className={css.error} name="number" component="span" />
        <button className={css.btnAddContact} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
