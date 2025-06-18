import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import TimeInp from '../timeInp/timeInp.js';
import Container from 'react-bootstrap/Container';

function Navb({refs}) {
  return (
<Container >   
{/* width breakpoints */}
    <Navbar bg="transparent" variant="dark" style={{ padding: "30px 0px", }}>
      <Nav className="container-fluid">
        <Nav.Item className="ms-auto" style={{ float: "right" }}>
          <TimeInp refs={{
          wrMin: refs.wrMin,
          wrSec: refs.wrSec,
          brMin: refs.brMin,
          brSec: refs.brSec,
          subF : refs.subF
        }}/>
        </Nav.Item>
      </Nav>
    </Navbar>
    </Container>
  );
}

export default Navb;