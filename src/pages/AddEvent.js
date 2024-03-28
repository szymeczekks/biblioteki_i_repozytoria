import './AddEvent.css';
import hero from '../images/hero.jpg';
import { useState } from 'react';

function AddEvent() {
    const [title, setTitle] = useState(null);
    const [author, setAuthor] = useState(null);
    const [description, setDescription] = useState(null);

    const handlePost = (e) => {
        e.preventDefault();
        console.log({
            title: title,
            author: author,
            description: description
        });
    }

    return (
        <div className='addWrapper'>
            <div className='filter_bg'></div>
            <img className='hero_img' alt="" src={hero} />
            <div className="container addEvent">
                <form>
                    <div className='inputWrapper'>
                        <label htmlFor="title">Tytuł eventu</label>
                        <input onChange={e => setTitle(e.target.value)} id="title" type="text" placeholder='Wspólne oglądanie kina'></input>
                    </div>
                    <div className='inputWrapper'>
                        <label htmlFor="author">Jak się nazywasz?</label>
                        <input onChange={e => setAuthor(e.target.value)} id="author" type="text" placeholder='John Doe'></input>
                    </div>
                    <div className='inputWrapper'>
                        <label htmlFor="title">Opisz swój event</label>
                        <textarea onChange={e => setDescription(e.target.value)} id="description" placeholder='Wspólne oglądanie kina na dachu kampera'></textarea>
                    </div>
                    <input type="submit" onClick={e => handlePost(e)} value="Dodaj event"></input>
                </form>
            </div>
        </div>
    );
}

export default AddEvent;
