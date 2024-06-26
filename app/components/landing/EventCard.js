import { getBlurData } from '@/utils/utils';
import Image from 'next/image';
import Link from 'next/link';
import CardActions from '../CardActions';
import EventSchemaScript from '../meta/EventSchemaScript';
const EventCard = async ({ event }) => {
    const { base64 } = await getBlurData(event?.imageUrl);

    return (
        <div className="overflow-hidden rounded-md bg-[#242526]">
            <EventSchemaScript event={event} />
            <Image
                src={event?.imageUrl}
                width={100}
                height={100}
                alt="Event 1"
                className="w-full h-[240px] object-cover"
                placeholder="blur"
                blurDataURL={base64}
            />

            <div className="p-3">
                <Link
                    href={`/details/${event?.id}`}
                    className="font-bold text-lg"
                >
                    {event?.name}
                </Link>
                <p className="text-[#9C9C9C] text-sm mt-1">{event?.location}</p>
                <div className="text-[#737373] text-sm mt-1">
                    <span>{event?.interested_ids?.length} Interested</span>
                    <span className="mx-1">|</span>
                    <span>{event?.going_ids?.length} Going</span>
                </div>

                <CardActions
                    eventId={event?.id}
                    interestedIds={event?.interested_ids}
                    goingUserIds={event?.going_ids}
                />
            </div>
        </div>
    );
};

export default EventCard;
