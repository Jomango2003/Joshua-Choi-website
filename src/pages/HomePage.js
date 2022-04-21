import React from 'react'
import { AboutHeader } from '../components/AboutHeader';
import {AboutMain} from '../components/AboutMain'
import { AboutRowButtons } from '../components/AboutRowButtons';
import {AboutFooter} from '../components/AboutFooter';

export function HomePage(){
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