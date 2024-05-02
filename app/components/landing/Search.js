'use client';
import useDebounce from '@/hooks/useDebounce';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const Search = () => {
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const router = useRouter();

    const handleSearch = useDebounce((term) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        router.replace(`${pathName}?${params.toString()}`);
    }, 500);
    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                className="bg-[#27292F] border border-[#CCCCCC]/20 py-1 px-2 rounded-md"
                onChange={(e) => handleSearch(e.target.value)}
                defaultValue={searchParams.get('query')?.toString()}
            />
        </div>
    );
};

export default Search;
