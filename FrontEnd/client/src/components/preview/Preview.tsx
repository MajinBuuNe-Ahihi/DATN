import { Container, Row } from 'react-bootstrap'
import AddPlaceForm from './AddPlaceForm'
import '@styles/preview.scss'

type Props = {}

export default function Preview({}: Props) {
  return (
    <div className='preview'>
      <Container className="preview__contain" fluid="md">
        <Row>
          <div className="preview__heading">Viết Review</div>
        </Row>
        <Row>
          <AddPlaceForm></AddPlaceForm>
        </Row>
      </Container>
    </div>
  )
}