import * as React from 'react';
import { Menu } from 'semantic-ui-react';

class Navbar extends React.Component {
  render() {
    return (
      <Menu inverted={true} size="huge" fixed="top">
          <Menu.Item header={true}>RealtorMeNot</Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item name="Login" />
          </Menu.Menu>
      </Menu>
    );
  }
}

export default Navbar;