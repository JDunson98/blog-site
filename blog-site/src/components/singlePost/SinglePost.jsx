import React from 'react';
import './singlepost.css';

const SinglePost = () => {
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img 
                    src="https://media.self.com/photos/5f189b76c58e27c99fbef9e3/1:1/w_768,c_limit/blackberry-vanilla-french-toast.jpg" 
                    alt="" 
                    className="singlePostImg" 
                />
                <h1 className="singlePostTitle">
                    Lorem Lorem
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-solid fa-trash-can"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className='singlePostAuthor'>Author: <b>Josh</b></span>
                    <span className='singlePostDate'>1 hour ago</span>
                </div>
                <p className='singlePostDesc'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Placeat est error itaque, quae voluptatem libero sunt deleniti 
                    nemo exercitationem odit obcaecati ducimus inventore temporibus 
                    accusamus earum, animi a dolorem veritatis?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Placeat est error itaque, quae voluptatem libero sunt deleniti 
                    nemo exercitationem odit obcaecati ducimus inventore temporibus 
                    accusamus earum, animi a dolorem veritatis?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Placeat est error itaque, quae voluptatem libero sunt deleniti 
                    nemo exercitationem odit obcaecati ducimus inventore temporibus 
                    accusamus earum, animi a dolorem veritatis?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Placeat est error itaque, quae voluptatem libero sunt deleniti 
                    nemo exercitationem odit obcaecati ducimus inventore temporibus 
                    accusamus earum, animi a dolorem veritatis?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Placeat est error itaque, quae voluptatem libero sunt deleniti 
                    nemo exercitationem odit obcaecati ducimus inventore temporibus 
                    accusamus earum, animi a dolorem veritatis?
                </p>
            </div>
        </div>
    )
}

export default SinglePost;