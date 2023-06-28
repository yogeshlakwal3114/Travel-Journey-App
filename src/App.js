import './App.css';
import Navbar from './component/nav';
import Card from './component/card';
import data from './data';

export default function App() {
  const cards = data.map(item => {
    return (
      <Card 
        img={item.coverImg}
        place={item.location}
        map={item.mapLink}
        placeName={item.name}
        placeDate={item.date}
        describe={item.description}

      />
    )
  })
  return (
    <div>
      <Navbar />
      <section>
        {cards}
      </section>
    </div>
  );
}

