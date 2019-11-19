import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

export default class Smalldrop extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
      const Dropstyle = {
  color: '#4A8ABF',
  backgroundColor:'white',
  margin:'0px',
  padding:'10px',
}
;
    return (
      <Dropdown direction="down" size="sm" isOpen={this.state.dropdownOpen} toggle={this.toggle}> {/*this direction works*/}
        <DropdownToggle caret style={Dropstyle}>
          &#9776;
        </DropdownToggle>
        <DropdownMenu right> {/*so for some reason when I add the style to this one, the menu stops going left*/}
        
          <DropdownItem><Link to="/Signup">Sign Up</Link></DropdownItem>
          <DropdownItem><Link to="/About">About</Link></DropdownItem>
          <DropdownItem><Link to="/Login">Contact</Link></DropdownItem>

          
          
         
        </DropdownMenu>
      </Dropdown>
    );
  }
}