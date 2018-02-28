import * as React from 'react';
import { Grid } from 'semantic-ui-react';

import BuyCard from './BuyCard/BuyCard';

const classes = require('./BuyGrid.css');

const buyGrid = (props: object) => {

    let cards = [
        {
            address: '605 Oakton St APT 2W, Evanston, IL 60202',
            price: '459,000',
            beds: '4',
            size: '12,000',
            imageUrl: ''
        },
        {
            address: '605 Oakton St APT 2W, Evanston, IL 60202',
            price: '459,000',
            beds: '4',
            size: '12,000',
            imageUrl: ''
        },
        {
            address: '605 Oakton St APT 2W, Evanston, IL 60202',
            price: '459,000',
            beds: '4',
            size: '12,000',
            imageUrl: ''
        },
        {
            address: '605 Oakton St APT 2W, Evanston, IL 60202',
            price: '459,000',
            beds: '4',
            size: '12,000',
            imageUrl: ''
        },
        {
            address: '605 Oakton St APT 2W, Evanston, IL 60202',
            price: '459,000',
            beds: '4',
            size: '12,000',
            imageUrl: ''
        },
        {
            address: '605 Oakton St APT 2W, Evanston, IL 60202',
            price: '459,000',
            beds: '4',
            size: '12,000',
            imageUrl: ''
        },
    ];

    let rows = [];
    let cols = [];
    let colCount = 0;

    for (let index = 0; index < cards.length; index++) {
        if (colCount === 3) {
            rows.push(cols);
            colCount = 0;
            cols = [];
        }
        cols.push((
            <Grid.Column key={index} className={classes.column}>
                <BuyCard {...cards[0]} />
            </Grid.Column>
        ));
        colCount++;
    }

    if (colCount !== 0) {
       rows.push(cols);
    }
    
    return (
        <Grid className={classes.grid} stackable={true} verticalAlign="middle" columns={4} centered={true}>
            {rows.map((row, index) => {
                return (
                    <Grid.Row key={index}>
                        {row}
                    </Grid.Row>
                );
            })}
        </Grid>
    );
};

export default buyGrid;