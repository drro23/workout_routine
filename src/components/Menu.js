import React from 'react';

class Menu extends React.Component {

    render() {
        return (
            <div className="w-20 bg-red-600 h-full flex-column text-center text-white float-left">
                { /*<img src={}></img> */ }
                <h1>Logo</h1>
                <h2 className="mt-10">Workout Routine</h2>
            </div>
        );
    }
}

export default Menu;