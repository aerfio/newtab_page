import React from 'react';
import './plan.css'
import obrazek from './planik.PNG'

class Plan extends React.Component {
    render() {
        return (
            <div id='plan'>
                <img src={obrazek} alt='plan.png'/>
            </div>
        );
    }
}

export default Plan;