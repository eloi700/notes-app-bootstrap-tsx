import * as React from 'react' // tsrafc
import { Container, Navbar } from 'react-bootstrap'

type Props = {
  
}

export const Header = (props: Props) => {
  return (
    <Navbar fixed="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >
            React Notes
          </Navbar.Brand>
        </Container>
    </Navbar>
  )
}
