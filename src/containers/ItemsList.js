import React from 'react';
import PropTypes from 'prop-types';
import { Rnd } from 'react-rnd';

import iconClose from '../assets/svg/img-close.svg'

const ItemsList = ({ propItems, itemUpdatePosition, itemUpdateSize, itemDelete }) => {

    let renderedList = propItems.map((item, i) => {
        return(
        <Rnd className={"Rnd Rnd--"+item.type}
            key = {"item"+i}
            style={item.type === 'photo' && { backgroundImage: "url("+item.asset+")" }} 
            size={{ width: item.width, height: item.height }}
            position={{ x: item.x, y: item.y }}
            onDragStop={(e, d) => {
                itemUpdatePosition( i, d.x, d.y );
            }}
            onResize={(e, direction, ref, delta, position) => {
                itemUpdateSize(i, ref.offsetWidth, ref.offsetHeight, position.x, position.y);
              }}
            lockAspectRatio={item.type === 'photo' ? true : false}
            >
            {item.type === 'video' && (<div className="Editor__video-wrapper">
                <iframe title={"video" + i} src={item.asset} frameBorder="0" allow="autoplay; encrypted-media"></iframe>
            </div>)}
            <div className="Rnd__name">Item {i}</div>
            <div className="Rnd__close" onClick={ () => {
                itemDelete(i);
                }}>
                <img src={iconClose} alt="close"/>
            </div>
        </Rnd>
        );
    });
return renderedList;
};


ItemsList.defaultProps = {
  items: [],
};

ItemsList.propTypes = {
  items: PropTypes.array,
};

export default ItemsList;