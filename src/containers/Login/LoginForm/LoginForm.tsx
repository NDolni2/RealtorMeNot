import * as React from 'react';
import { Form, Input, Button } from 'semantic-ui-react';

const loginForm = (props: object) => {
    return (
        <Form>
            <Form.Field>
                <Input icon="mail" iconPosition="left" placeholder="E-mail address"/>
            </Form.Field>
            <Form.Field>
                <Input icon="lock" iconPosition="left" type="password" placeholder="Password"/>
            </Form.Field>
            <Button type="submit" color="green" fluid={true}>
                Login
            </Button>
        </Form>
    );
};

export default loginForm;