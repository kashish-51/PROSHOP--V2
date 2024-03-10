import React from 'react'
import {Container, Row, Col} from "react-bootstrap";


function Footer() {
    const currrentYear = new Date().getFullYear()
  return (
<footer>
    <Container>
        <Row>
          <Col ClassName='text-center py-3'>
                <p>ProShoop &copy; {currrentYear}</p>
          </Col>
        </Row>
    </Container>
</footer>
  )
}

export default Footer
