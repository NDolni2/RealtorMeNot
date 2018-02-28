import * as React from 'react';
import { Grid, Segment, Menu, MenuItemProps } from 'semantic-ui-react';
import { Route, RouteProps, RouteComponentProps, Switch } from 'react-router-dom';

import LoginForm from './LoginForm/LoginForm';
import SignupForm from './SignupForm/SignupForm';

const classes = require('./Login.css');

interface State {
    activeItem: string;
}

interface NavLinkProp extends MenuItemProps {
    name: string;
}

class Login extends React.Component<RouteComponentProps<RouteProps>, State> {

    state = {
        activeItem: ''
    };

    componentDidMount() {
        if (this.props.location.pathname === '/login/signup' ||
            this.props.location.pathname === '/login/signup/') {
                this.setState({activeItem: 'Signup'});
        } else {
            this.setState({activeItem: 'Login'});
        }
    }

    render() {
        const loginProps = {
            name: 'Login', 
            active: this.state.activeItem === 'Login', 
            to: '/', 
            onClick: this.onLinkClick
        };

        const signupProp = {
            name: 'Signup', 
            active: this.state.activeItem === 'Signup', 
            to: '/signup', 
            onClick: this.onLinkClick
        };

        return (
            <Grid verticalAlign="middle" columns={1} centered={true}>
                <Grid.Row>
                    <Grid.Column textAlign="center" className={classes.column}>
                        <Segment className={classes.login}>
                            <h2>Welcome to RealtorMeNot</h2>
                            <Menu pointing={true} secondary={true}>
                                <Menu.Item {...loginProps} />
                                <Menu.Item {...signupProp} />
                            </Menu>
                            <Switch>
                                <Route path={this.props.match.url + '/signup'} component={SignupForm} />
                                <Route path={this.props.match.url} component={LoginForm} />
                            </Switch>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }

    onLinkClick = (even: React.SyntheticEvent<EventTarget>, data: NavLinkProp) => {
        this.setState({activeItem: data.name});
        this.props.history.push(this.props.match.path + data.to);
    }
}

export default Login;