import React, { Component } from 'react';
import './BackNavigation.css';
import { 
    Link 
} from 'react-router-dom';


class BackNavigation extends Component {

    render() {
        return (
            <div className="back-button">
                <Link to="/" className="back-button__link">Zum Hauptmenü</Link>
            </div>
        );
    }
}

export default BackNavigation;