import './AddEvent.css';
import hero from '../images/hero.jpg';
import { DataContext } from '../components/context';
import { useState, useContext } from 'react';

function AddEvent() {
    const [title, setTitle] = useState(null);
    const [author, setAuthor] = useState(null);
    const [city, setCity] = useState(null);
    const { data, setData } = useContext(DataContext);

    const handlePost = (e) => {
        e.preventDefault();
        console.log(data);
        // let event = {
        //     id: data.length,
        //     title: title,
        //     rating: 0,
        //     reviews: 0,
        //     initiator: author,
        //     city: city
        // };
        // let events = (...data + event) ;
        // console.log(events);
        setData([
            ...data,
            {
            id: data.length,
            title: title,
            rating: 0,
            reviews: 0,
            initiator: author,
            city: city
        }]);
        console.log(...data);
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
                        <label htmlFor="city">Podaj miasto</label>
                        <input onChange={e => setCity(e.target.value)} id="city" type="text" placeholder='Koszalin'></input>
                    </div>
                    <input type="submit" onClick={e => handlePost(e)} value="Dodaj event"></input>
                </form>
            </div>
        </div>
    );
}

export default AddEvent;
