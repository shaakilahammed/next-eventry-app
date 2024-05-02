import { Suspense } from 'react';
import Loader from './components/Loader';
import EventList from './components/landing/EventList';
import Header from './components/landing/Header';

const Home = ({ searchParams: { query } }) => {
    return (
        <section className="container">
            <Header />
            <Suspense key={query} fallback={<Loader />}>
                <EventList query={query} />
            </Suspense>
        </section>
    );
};

export default Home;
