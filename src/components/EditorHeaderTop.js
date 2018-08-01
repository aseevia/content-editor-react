import React from 'react';
import logo from '../assets/svg/logo.svg'

const EditorHeaderTop = () => (
    <div className="Editor-header__top">
        <h1 className="Editor-header__title title is-3">
        <img src={logo} alt="React logo" />
        React
        </h1>
        <h4 className="subtitle is-5 has-text-white">
            Content Editor Proto
        </h4>
    </div>
);

export default EditorHeaderTop;