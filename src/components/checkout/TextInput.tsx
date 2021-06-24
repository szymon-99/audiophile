import React, { FC } from "react"
import styled from "styled-components"
import { useField } from "formik"

interface TextInputProps {
  name: string
  type?: string
  label: string
  id: string
  placeholder: string
}

const TextInput: FC<TextInputProps> = ({ label, ...props }) => {
  const [field, meta] = useField({ ...props, type: props.type || "text" })
  return (
    <Wrapper>
      <label htmlFor={props.name || props.id}>
        {label}
        {meta.touched && meta.error ? <span>{meta.error}</span> : null}
      </label>
      <input {...field} {...props} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  label {
    display: flex;
    justify-content: space-between;
    font-weight: var(--bold);
    font-size: 0.75rem;
    text-transform: capitalize;

    span {
      font-weight: initial;
    }
  }
  input {
    padding: 1rem 1.5rem;
    border-radius: var(--radius);
    border: 1px solid var(--gray-2);
    width: 100%;
    outline: none;
    :focus {
      border: 1px solid var(--peach);
    }
    ::placeholder {
      opacity: 50%;
    }
  }
`
export default TextInput
