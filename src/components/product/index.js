import React from 'react';
import {connect} from 'react-redux';

class ProductList extends React.Component{
    render(){
        return(
            <div>
                <h2>Product List</h2>
            </div>
        )
    }
}


export default connect()(ProductList);