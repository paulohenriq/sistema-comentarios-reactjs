import React, { Component } from 'react';

class Comments extends Component{
    render(){
        return(
            <div>
                Render comments here.
                {JSON.stringify(this.props.comments)}
            </div>
        )
    }
}

export default Comments