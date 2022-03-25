import * as Styled from './styled'
import { Row } from '../../dumbs/Row'
function Post(props) {
  return (
    <Styled.Container>
      <Styled.Profile>
        <div>
          <Styled.Picture src={props.profile.picture} />
          <Styled.Name>{props.profile.name}</Styled.Name>
        </div>
        <Styled.Dots />
      </Styled.Profile>
      <Styled.Photo src={props.photo} />
      <Styled.Icons>
        <Row>
          <Styled.Heart />
          <Styled.Balloon />
          <Styled.Send />
        </Row>
        <Styled.Save />
      </Styled.Icons>
      <Styled.Footer>
        <Styled.Content>
          <Styled.Name>{props.profile.name}</Styled.Name>
          <Styled.Description>{props.description}</Styled.Description>
        </Styled.Content>
        <Styled.PastTime>{props.pastTime}</Styled.PastTime>
      </Styled.Footer>
    </Styled.Container>
  )
}

export default Post
