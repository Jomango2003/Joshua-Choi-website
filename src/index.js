import React from 'react'
import ReactDOM from 'react-dom'
import styles from './style.css'
import { AboutHeader } from './components/AboutHeader';
import {AboutMain} from './components/AboutMain'
import { AboutRowButtons } from './components/AboutRowButtons';
import {AboutFooter} from './components/AboutFooter';


function App(){
    return(
        <div>
            <AboutHeader />
            <AboutMain />
            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
            <AboutRowButtons />
            <AboutFooter />
        </div>
    );
}
ReactDOM.render(<App />, document.getElementById("root"));