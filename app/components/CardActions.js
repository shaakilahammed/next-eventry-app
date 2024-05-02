'use client';
import { updateInterest } from '@/actions/event';
import useAuth from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';

const CardActions = ({
    forDetails = false,
    eventId,
    interestedIds,
    goingUserIds,
}) => {
    const { auth } = useAuth();
    const router = useRouter();
    const isInterested = interestedIds.find((id) => id === auth?.id);
    const isGoing = goingUserIds.find((id) => id === auth?.id);

    const [interested, setInterested] = useState(isInterested);

    const [isPending, startTransition] = useTransition();

    const toggleInterest = async () => {
        if (auth) {
            await updateInterest(eventId, auth?.id);

            setInterested(!interested);
        } else {
            router.push('/login');
        }
    };
    const markGoing = async () => {
        if (auth) {
            router.push(`/payment/${eventId}`);
        } else {
            router.push('/login');
        }
    };
    return (
        <div className={`w-full flex gap-4 mt-4 ${forDetails && 'flex-1'}`}>
            {/* <!-- bg-indigo-600 indicating Active --> */}
            <button
                onClick={() =>
                    startTransition(() => {
                        toggleInterest();
                    })
                }
                className={`w-full ${
                    interested && 'bg-indigo-600 hover:bg-indigo-800'
                } disabled:cursor-not-allowed`}
                disabled={isPending}
            >
                Interested
            </button>

            {/* <!-- bg-green-600 indicating Active --> */}
            <button
                onClick={markGoing}
                disabled={isGoing}
                className={` disabled:bg-green-600 text-center w-full  py-2 px-2 rounded-md border border-[#5F5F5F]/50 shadow-sm cursor-pointer hover:bg-[#3C3D3D] transition-colors active:translate-y-1`}
            >
                Going
            </button>
        </div>
    );
};

export default CardActions;
