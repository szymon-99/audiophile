import styled from "styled-components"
import { Link } from "gatsby"

export const PrimaryButton = styled(Link)`
  display: inline-block;
  font-size: 0.8125rem;
  text-transform: uppercase;
  padding: 1rem 2rem;
  color: var(--white);
  background-color: var(--peach);
  letter-spacing: 0.0625rem;
  line-height: 1rem;
  font-weight: var(--bold);
  transition: var(--transition);
  :hover {
    background-color: var(--light-peach);
  }
`
export const SecondaryButton = styled(PrimaryButton)`
  color: var(--black);
  background-color: var(--white);
  -webkit-box-shadow: inset 0px 0px 0px 1px var(--black);
  -moz-box-shadow: inset 0px 0px 0px 1px var(--black);
  box-shadow: inset 0px 0px 0px 1px var(--black);
  :hover {
    background-color: var(--black);
    color: var(--white);
  }
`
