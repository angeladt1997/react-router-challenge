import React from 'react';
import {Roueter} from 'react-dom-router';
import AboutMenu from './about-menu';

export default function App(props) {
    return (
        <div className="app">
            {/* This should only show up on /about/foo, /about/bar, or /about/foo/bar */}
            <Router path='/aboutAboutMenu />
        </div>
    );
}
