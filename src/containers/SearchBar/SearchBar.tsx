import * as React from 'react';
import { Input } from 'semantic-ui-react';

const classes = require('./SearchBar.css');

interface Props {
    placeholder?: string; 
}

class Search extends React.Component<Props, object> {
    render() {
        return (
            <Input size="massive" icon="search" {...this.props} fluid={true} className={classes.bar}/>
        );
    }
}

export default Search;