import * as Styled from './styles'

function SearchInput (props) {
  return <Styled.Input placeholder="Pesquisar" onChange={props.onChange} value={props.value} />
}

export default SearchInput