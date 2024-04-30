import EventCard from './EventCard';

const EventList = ({ events }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {events.length > 0 ? (
                events.map((event) => (
                    <EventCard key={event?.id} event={event} />
                ))
            ) : (
                <span>No events found at this time!</span>
            )}
        </div>
    );
};

export default EventList;
