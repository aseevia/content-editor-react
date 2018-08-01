import React from 'react';
import PropTypes from 'prop-types';
import EditorHeaderTop from '../components/EditorHeaderTop';
import { getUrlParameterByName } from '../utils'

import imgAddPhoto from '../assets/svg/img-add-photo.svg'
import imgAddVideo from '../assets/svg/img-add-video.svg'
import imgUndo from '../assets/svg/img-undo.svg'

class EditorHeader extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            url: ''
          }
    }

    urlChange = (e) => {
        this.setState({ url: e.target.value });
    }

    urlKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            this.props.addVideo(e);
          }
    }

    addVideo = (e) => {
        const url = this.state.url;
        let params = url.split('?');
        let videoId = getUrlParameterByName('v','?'+params[1]);
        this.props.addItem('video', 'https://www.youtube.com/embed/'+videoId); // for Youtube Tumbnail: "https://img.youtube.com/vi/" + videoId + "/0.jpg"
        this.setState({ url: '' });
    }

    photoChangedHandler = (e) => {
        const file = e.target.files[0];
        
        if (file.type.match('image.*')) {
            this.props.addItem('photo', URL.createObjectURL(file));
        }
    }

    render() {
        return (
        <header className="Editor-header">
        <EditorHeaderTop />
        <div className="Editor-header__controls">
            <label>
                <input type="file" onChange={this.photoChangedHandler} />
                <img src={imgAddPhoto} className="Editor-logo" alt="Upload pic" />
            </label>
            <label htmlFor="url-tab">
                <img src={imgAddVideo} className="Editor-logo" alt="Upload video" />
            </label>
            <img src={imgUndo} className="Editor__undo" alt="Undo" onClick={this.props.undoStep}/ >
            <input id="url-tab" type="checkbox" />
            <div className="Editor-header__add-url">
                <input 
                value={this.state.url} 
                onChange={this.urlChange} 
                onKeyDown={this.urlKeyDown} 
                className="input" 
                placeholder="YouTube video URL"
                />
                <a className="button is-info" onClick={this.addVideo}>+</a>
            </div>
            
        </div>
        </header>
        );
    }

};
  
EditorHeader.propTypes = {
    addItem: PropTypes.func.isRequired,
    undoStep: PropTypes.func.isRequired,
};

export default EditorHeader;