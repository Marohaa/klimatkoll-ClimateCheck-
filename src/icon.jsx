import {React, Link} from 'react';
import { Dropdown } from 'react-bootstrap';


function Icon() {


 return (
    <>
      <Dropdown >
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          Min Profil
        </Dropdown.Toggle>

        <Dropdown.Menu style={{ color: 'white', backgroundColor: '#F6F6F2' }}>
          <Dropdown.Item href="/min-profil">Min Profil</Dropdown.Item>
          <Dropdown.Item as={Link} to="/login">Logga ut</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

     
    </>
 );
}

export default Icon;