import * as React from 'react';
import { Dropdown, DropdownProps } from 'semantic-ui-react';

const classes = require('./SearchBar.css');

interface Props {
    placeholder?: string; 
}

class Search extends React.Component<Props, object> {
    render() {
        
        const searchProps: DropdownProps = {
            search: true,
            selection: true,
            icon: 'search',
            className: classes.bar,
            options: [
                {value: 'Chicago', text: 'Chicago'},
                {value: 'Evanston', text: 'Evanston'},
                {value: 'Glenview', text: 'Glenview'},
                {value: 'Downers Grove', text: 'Downers Grove'},
            ],
            ...this.props,

        };
        return (
            <Dropdown {...searchProps} />
        );
    }
}

export default Search;