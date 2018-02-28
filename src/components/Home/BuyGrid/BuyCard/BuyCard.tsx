import * as React from 'react';
import { Card, Image, List } from 'semantic-ui-react';

interface Props {
    address: string;
    price: string;
    beds: string;
    size: string;
}

const buyCard = (props: Props) => {

    return (
        <Card>
            <Image src="https://photos.zillowstatic.com/p_h/ISyj1qzgziachs0000000000.jpg" />
            <Card.Content>
                <Card.Header textAlign="center">
                    {props.address}
                </Card.Header>
            </Card.Content>
            <Card.Content>
                <Card.Description>
                    <List>
                        <List.Item><b>Price</b>: ${props.price}</List.Item>
                        <List.Item><b>Beds</b>: {props.beds}</List.Item>
                        <List.Item><b>Property Size</b>: {props.size} sqft</List.Item>
                    </List>
                </Card.Description>
            </Card.Content>
        </Card>
    );
};

export default buyCard;