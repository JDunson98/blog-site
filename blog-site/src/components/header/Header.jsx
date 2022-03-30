import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className='headerTitleSm'>React & Node</span>
                <span className='headerTitleLg'>Blog</span>
            </div>
            <img 
                className='headerImg' 
                src='https://media.istockphoto.com/photos/wildflowers-meadow-under-blue-sky-picture-id906645160?k=20&m=906645160&s=612x612&w=0&h=GomLxt1IaTeUjTIZhd9lNnZ8_YM_PkoVrfLq337k_KU=' 
                alt='' 
            />
        </div>
    )
}

export default Header;