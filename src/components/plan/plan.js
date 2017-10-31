import React from 'react';
import './plan.css'

class Plan extends React.Component {
    render() {
        return (
            <div id='plan'>
                <img src={require('./planik.PNG')} alt='plan.png'/>
            </div>
        );
    }
}

export default Plan;