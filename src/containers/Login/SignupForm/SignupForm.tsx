import * as React from 'react';
import { Form, Input, Button } from 'semantic-ui-react';

const loginForm = (props: object) => {
    return (
        <Form>
            <Form.Group widths="equal">
                <Form.Field control={Input} placeholder="First name" />
                <Form.Field control={Input} placeholder="Last name" />
            </Form.Group>
            <Form.Field>
                <Input icon="mail" iconPosition="left" placeholder="E-mail address"/>
            </Form.Field>
            <Form.Field>
                <Input icon="user" iconPosition="left" placeholder="Username"/>
            </Form.Field>
            <Form.Field>
                <Input icon="lock" iconPosition="left" type="password" placeholder="Password"/>
            </Form.Field>
            <Form.Field>
                <Input icon="lock" iconPosition="left" type="password" placeholder="Confirm Password"/>
            </Form.Field>
            <Button type="submit" color="green" fluid={true}>
                Sign up
            </Button>
        </Form>
    );
};

export default loginForm;