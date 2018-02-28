import * as React from 'react';
import Navbar from '../../containers/Navbar/Navbar';

interface Props {
    // tslint:disable-next-line:no-any
    children?: any;
}

const layout = (props: Props) => (
    <React.Fragment>
        <Navbar />
        {props.children}
    </React.Fragment>
);

export default layout;