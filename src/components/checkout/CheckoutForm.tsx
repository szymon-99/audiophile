import React from "react"
import styled from "styled-components"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import CheckoutCart from "./CheckoutCart"
import TextInput from "./TextInput"
import RadioButtons from "./RadioButtons"
import { useActions } from "../../hooks"

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const CheckoutForm = () => {
  const { openSummary } = useActions()

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        address: "",
        zip: "",
        city: "",
        country: "",
        paymentMethod: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string().required("required"),
        email: Yup.string().email("Wrong format").required("required"),
        phone: Yup.string()
          .matches(phoneRegExp, "wrong format")
          .required("required"),
        address: Yup.string().required("required"),
        zip: Yup.string().required("required"),
        city: Yup.string().required("required"),
        country: Yup.string().required("required"),
        paymentMethod: Yup.string().required("Please select payment method"),
      })}
      onSubmit={values => {
        openSummary()
      }}
    >
      <StyledForm>
        <div className="container">
          <h3>checkout</h3>
          <div className="billing">
            <p className="title">billing details</p>
            <TextInput
              name="name"
              id="name"
              type="text"
              label="name"
              placeholder="Alexei Ward"
            />
            <TextInput
              name="email"
              id="email"
              type="email"
              label="email adress"
              placeholder="alexei@mail.com"
            />
            <TextInput
              name="phone"
              id="phone"
              type="tel"
              label="phone number"
              placeholder="+1 202-555-0136"
            />
          </div>
          <div className="shipping">
            <p className="title">shipping info</p>
            <TextInput
              name="address"
              id="address"
              label="address"
              placeholder="1137 Williams Avenue"
            />
            <TextInput
              name="zip"
              id="zip"
              label="zip code"
              placeholder="10001"
            />
            <TextInput
              name="city"
              id="city"
              label="city"
              placeholder="New York"
            />
            <TextInput
              name="country"
              id="country"
              label="country"
              placeholder="United States"
            />
          </div>
          <div className="details">
            <p className="title">payment details</p>
            <RadioButtons />
          </div>
        </div>
        <CheckoutCart />
      </StyledForm>
    </Formik>
  )
}
const StyledForm = styled(Form)`
  background: var(--gray);
  display: grid;
  grid-gap: 2rem;

  .container {
    display: grid;
    grid-gap: 2rem;
    padding: 1.5rem;
    background: var(--white);
    border-radius: var(--radius);
    .title {
      font-weight: var(--bold);
      text-transform: uppercase;
      color: var(--peach);
      font-size: 0.8125rem;
      letter-spacing: 0.058rem;
    }
    .billing,
    .shipping {
      display: grid;
      grid-gap: 1rem;
    }
  }
  @media screen and (min-width: 768px) {
    .container {
      grid-gap: 3rem;
    }
    .title {
      grid-column: span 2;
    }
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: 2fr 1fr;
    .container {
      padding: 3rem;
    }
  }
`

export default CheckoutForm
