import eventImage from '@/public/assets/events/google-io-2023-1.png';
import Image from 'next/image';
import Link from 'next/link';
import CardActions from '../CardActions';
const EventCard = () => {
    return (
        <div className="overflow-hidden rounded-md bg-[#242526]">
            <Image src={eventImage} alt="Event 1" className="w-full" />

            <div className="p-3">
                <Link href="/details/1" className="font-bold text-lg">
                    Google I/O Extended
                </Link>
                <p className="text-[#9C9C9C] text-sm mt-1">
                    Rangpur, Dhaka, Bangladesh, Rangpur, Bangladesh
                </p>
                <div className="text-[#737373] text-sm mt-1">
                    <span>1k Interested</span>
                    <span>|</span>
                    <span>40K Going</span>
                </div>

                <CardActions />
            </div>
        </div>
    );
};

export default EventCard;
