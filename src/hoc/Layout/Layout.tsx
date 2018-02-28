import * as React from 'react';
import Navbar from '../../containers/Navbar/Navbar';

interface Props {
    children?: React.ReactNode;
}

const layout = (props: Props) => (
    <React.Fragment>
        <Navbar />
        {props.children}
    </React.Fragment>
);

export default layout;