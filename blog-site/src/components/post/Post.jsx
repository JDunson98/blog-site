import React from 'react';
import './post.css';

const Post = () => {
    return (
        <div className='post'>
            <img 
                className='postImg'
                src='https://media.self.com/photos/5f189b76c58e27c99fbef9e3/1:1/w_768,c_limit/blackberry-vanilla-french-toast.jpg'
                alt=''
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem Lorem Lorem Lorem</span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className='postDesc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Nostrum inventore ratione porro accusamus. Natus rem vitae 
                tempore et id voluptate, impedit ab quas ullam sed facere 
                modi placeat nisi quo.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Nostrum inventore ratione porro accusamus. Natus rem vitae 
                tempore et id voluptate, impedit ab quas ullam sed facere 
                modi placeat nisi quo.
            </p>
        </div>
    )
}

export default Post;