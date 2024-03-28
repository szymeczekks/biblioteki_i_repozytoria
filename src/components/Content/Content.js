import { useEffect, useState, useContext } from "react";
import { CityContext } from '../context';
import './Content.css';
function Content() {
    const [offers, setOffers] = useState(null);
    const { city, setCity } = useContext(CityContext);
    useEffect(() => {
        const offersTest = [
            {
                id: 3,
                title: 'Wspólne oglądanie kina 3',
                rating: 4.5,
                reviews: 120,
                initiator: 'Szymon',
                city: "Koszalin"
            },
            {
                id: 1,
                title: 'Wspólne oglądanie kina',
                rating: 4.5,
                reviews: 120,
                initiator: 'Szymon',
                city: "Koszalin"
            },
            {
                id: 2,
                title: 'Wspólne oglądanie kina',
                rating: 4.5,
                reviews: 120,
                initiator: 'Szymon',
                city: "Koszalin"
            },
            {
                id: 0,
                title: 'Wspólne oglądanie kina w Kołobrzegu',
                rating: 3.9,
                reviews: 120,
                initiator: 'Szymon',
                city: "Kołobrzeg"
            },
            {
                id: 4,
                title: 'Wspólne oglądanie kina',
                rating: 4.5,
                reviews: 120,
                initiator: 'Szymon',
                city: "Koszalin"
            }
        ]
        setOffers(offersTest);
    }, []);

    const handleOffer = () => {
        console.log(city);
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
            sorted = [...offers.sort(compareUp)];
        } else {
            sorted = [...offers.sort(compareDown)];
        }
        setOffers(sorted);
    }

    return (
        <div id="offers" className="container">
            <div className="filters_wrapper">
                Filtruj według opinii: <div><button onClick={e => sortOffers('up')}>/\</button><button onClick={e => sortOffers('down')}>\/</button></div>
            </div>
            <div className="offers_wrapper">
                {offers?.map((offer) => (<div onClick={handleOffer} key={offer.id} className="offer">{Offer(offer)}</div>))}
            </div>
        </div>
    );
}

export default Content;
