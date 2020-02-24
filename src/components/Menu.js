import React from 'react';
import '../styles/Menu.scss';
import { ReactComponent as Logo } from '../images/logo_wkr.svg';
import { ReactComponent as WorkoutIcon } from '../images/workout_icon.svg';

class Menu extends React.Component {

    render() {
        return (
            <div className="w-20 h-full flex-column text-center float-left wkr-menu">
                { /*<img src={}></img> */}
                <h1 className="mt-6">{<Logo />}</h1>
                <a href="/"><h2 className="mt-10">{<WorkoutIcon />}</h2></a>
            </div>
        );
    }
}

export default Menu;