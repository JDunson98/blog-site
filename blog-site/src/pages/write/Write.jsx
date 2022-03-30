import React from 'react';
import './write.css';

const Write = () => {
    return (
        <div className='write'>
            <img 
                src="https://media.self.com/photos/5f189b76c58e27c99fbef9e3/1:1/w_768,c_limit/blackberry-vanilla-french-toast.jpg" 
                alt="" 
                className="writeImg" 
            />
            <form className='writeForm'>
                <div className="writeFormGroup">
                    <label htmlFor='fileInput'><i className="writeIcon fa-solid fa-plus"></i></label>
                    <input type='file' id='fileInput' style={{display: 'none'}} />
                    <input type='text' placeholder='Title' className='writeInput' autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea 
                        placeholder='Tell your story...' 
                        type='text' 
                        className='writeInput writeText'>
                    </textarea>
                </div>
                <button className='writeSubmit'>Publish</button>  
            </form>
        </div>
    )
}

export default Write;