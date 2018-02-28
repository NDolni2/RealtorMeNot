import * as React from 'react';

import Search from './Search/Search';
import BuyGrid from './BuyGrid/BuyGrid';

const home = (props: object) => {

    return (
        <React.Fragment>
            <Search />
            <BuyGrid />
        </React.Fragment>
    );
};

export default home;