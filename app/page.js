import { getAllEvents } from '@/actions/event';
import EventList from './components/landing/EventList';
import Header from './components/landing/Header';

const Home = async () => {
    const events = await getAllEvents();
    return (
        <section className="container">
            <Header />
            <EventList events={events} />
        </section>
    );
};

export default Home;
