import { useEffect, useState, useContext } from "react";
import { DataContext } from '../context';
import events from '../data/events.json';
import './Content.css';
function Content() {
    const [offers, setOffers] = useState(null);
    const { data, setData } = useContext(DataContext);
    useEffect(() => {
            !data && setData(events);
    }, []);

    const handleOffer = () => {
        console.log('offer');
    }

    const Offer = (offer) => {
        return (
            <>
                <div className="offer_img">
                    <img alt={''} />
                </div>
                <div className="offer_title">
                    <h4>{offer.title}</h4>
                </div>
                <div className="offer_rating">
                    <div className="rating">{offer.rating}</div>
                    {offer.reviews} ocen
                </div>
                <div className="offer_initiator">
                    Utworzono przez: <strong>{offer.initiator}</strong><br />
                    Lokalizacja: <strong>{offer.city}</strong>
                </div>
            </>
        )
    }

    function compareUp(a, b) {
        return a.rating - b.rating;
    }

    function compareDown(b, a) {
        return a.rating - b.rating;
    }

    const sortOffers = (how) => {
        let sorted;
        if (how === 'up') {
            sorted = [...data.sort(compareUp)];
        } else {
            sorted = [...data.sort(compareDown)];
        }
        setData(sorted);
    }

    return (
        <div id="offers" className="container">
            <div className="filters_wrapper">
                Filtruj według opinii: <div><button onClick={e => sortOffers('up')}>/\</button><button onClick={e => sortOffers('down')}>\/</button></div>
            </div>
            <div className="offers_wrapper">
                {data?.map((offer) => (<div onClick={handleOffer} key={offer.id} className="offer">{Offer(offer)}</div>))}
            </div>
        </div>
    );
}

export default Content;
