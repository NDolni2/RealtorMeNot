import * as React from 'react';
import { Grid } from 'semantic-ui-react';
import Search from '../../../containers/SearchBar/SearchBar';

const coverImage = require('../../../assets/images/cover.jpg');

const search = (props: object) => {

    const searchMessage = 'Enter an address, neighborhood, city, or ZIP code';
    const gridStyle = {
        backgroundImage: `url(${coverImage})`,
        backgroundSize: 'cover',
        height: '450px'
    };

    return (
        <Grid verticalAlign="middle" columns={1} centered={true} style={gridStyle}>
            <Grid.Row>
                <Grid.Column textAlign="center">
                    <Search placeholder={searchMessage} />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export default search;