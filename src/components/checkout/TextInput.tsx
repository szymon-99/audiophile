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
    <Wrapper error={meta.touched && meta.error ? true : undefined}>
      <label htmlFor={props.name || props.id}>
        {label}
        {meta.touched && meta.error ? <span>{meta.error}</span> : null}
      </label>
      <input {...field} {...props} />
    </Wrapper>
  )
}

interface InputProps {
  error?: true
}

const Wrapper = styled.div<InputProps>`
  label {
    display: flex;
    justify-content: space-between;
    font-weight: var(--bold);
    font-size: 0.75rem;
    text-transform: capitalize;
    color: ${props => (props.error ? "var(--red)" : "initial")};
    span {
      font-weight: initial;
    }
  }
  input {
    padding: 1rem 1.5rem;
    border-radius: var(--radius);
    border: 1px solid ${props => (props.error ? "var(--red)" : "var(--gray-2)")};
    width: 100%;
    outline: none;
    font-weight: var(--bold);
    :focus {
      border: 1px solid var(--peach);
    }
    ::placeholder {
      opacity: 50%;
    }
  }
`
export default TextInput
