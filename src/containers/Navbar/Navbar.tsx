import * as React from 'react';
import { Menu, MenuItemProps } from 'semantic-ui-react';
import { withRouter, RouteComponentProps, RouteProps } from 'react-router-dom';

interface NavLinkProp extends MenuItemProps {
  name: string;
}

class Navbar extends React.Component<RouteComponentProps<RouteProps>, object> {
  render() {
    return (
      <Menu inverted={true} size="huge" fixed="top">
          <Menu.Item header={true}>RealtorMeNot</Menu.Item>
          <Menu.Item to="/" onClick={this.onLinkClick}>Home</Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item name="Login" to="/login" onClick={this.onLinkClick}/>
          </Menu.Menu>
      </Menu>
    );
  }
  
  onLinkClick = (event: React.SyntheticEvent<EventTarget>, data: NavLinkProp) => {
    this.props.history.push(data.to);
  }
}

export default withRouter(Navbar);