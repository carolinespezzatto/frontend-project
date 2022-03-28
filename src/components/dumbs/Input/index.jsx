import * as Styled from './styled'

function Input (props) {
  return <Styled.Input className={props.className} placeholder={props.placeholder} value={props.value} onChange={props.onChange} />
}

export default Input