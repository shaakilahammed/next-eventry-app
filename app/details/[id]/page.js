import EventDetails from '@/app/components/details/EventDetails';
import HeroSection from '@/app/components/details/HeroSection';
import VenueLocation from '@/app/components/details/VenueLocation';

const EventDetailsPage = () => {
    return (
        <>
            <HeroSection />
            <section class="container">
                <div class="grid grid-cols-5 gap-12 my-12">
                    <EventDetails />
                    <VenueLocation />
                </div>
            </section>
        </>
    );
};

export default EventDetailsPage;
