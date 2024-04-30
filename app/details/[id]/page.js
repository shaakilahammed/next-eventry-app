import { getEventbyId } from '@/actions/event';
import EventDetails from '@/app/components/details/EventDetails';
import HeroSection from '@/app/components/details/HeroSection';
import VenueLocation from '@/app/components/details/VenueLocation';

const EventDetailsPage = async ({ params: { id } }) => {
    const event = await getEventbyId(id);
    return (
        <>
            <HeroSection event={event} />
            <section className="container">
                <div className="grid grid-cols-5 gap-12 my-12">
                    <EventDetails
                        details={event?.details}
                        swags={event?.swags}
                    />
                    <VenueLocation location={event?.location} />
                </div>
            </section>
        </>
    );
};

export default EventDetailsPage;
