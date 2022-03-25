import styled, { css } from 'styled-components'

const primaryStyle = css`
  background-color: #0095f6;
  color: #ffffff;
`

const secondaryStyle = css`
  background-color: transparent;
  color: #0095f6;
`

export const Button = styled.button`
  border-radius: 4px;
  border: none;
  padding: 5px 9px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  height: 30px;
`
