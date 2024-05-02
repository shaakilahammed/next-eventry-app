import { getBlurData } from '@/utils/utils';
import Image from 'next/image';
import CardActions from '../CardActions';

const HeroSection = async ({ event }) => {
    const { base64 } = await getBlurData(event?.imageUrl);
    return (
        <section className="container">
            <div className="bg-gradient-to-b from-slate-200/20 to-slate-800/30">
                <Image
                    src={event?.imageUrl}
                    alt={event?.name}
                    width={900}
                    height={450}
                    className="h-[450px] mx-auto"
                    placeholder="blur"
                    blurDataURL={base64}
                />
            </div>

            <div className="flex items-end">
                <div className="flex-auto py-4">
                    <h1 className="font-bold text-2xl">{event?.name}</h1>
                    <p className="text-[#9C9C9C] text-base mt-1">
                        {event?.location}
                    </p>
                    <div className="text-[#737373] text-sm mt-1">
                        <span>{event?.interested_ids?.length} Interested</span>
                        <span className="mx-1">|</span>
                        <span>{event?.going_ids?.length} Going</span>
                    </div>
                </div>

                <CardActions
                    forDetails={true}
                    eventId={event?.id}
                    interestedIds={event?.interested_ids}
                    goingUserIds={event?.going_ids}
                />
            </div>
        </section>
    );
};

export default HeroSection;
