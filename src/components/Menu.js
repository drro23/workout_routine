import React from 'react';
import '../styles/Menu.scss';

class Menu extends React.Component {

    render() {
        return (
            <div className="w-20 h-full flex-column text-center float-left wkr-menu">
                { /*<img src={}></img> */ }
                <h1>Logo</h1>
                <h2 className="mt-10">Workout Routine</h2>
            </div>
        );
    }
}

export default Menu;