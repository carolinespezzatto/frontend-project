import Input from '../../dumbs/Input'

function SearchInput (props) {
  return <Input placeholder="Pesquisar" onChange={props.onChange} value={props.value} />
}

export default SearchInput