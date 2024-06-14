'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import clsx from 'clsx';

const links = [
    {name: 'esp1', href: '/dashboard'},
    {name: 'esp2', href: '/dashboard'},
];

export default function EspLinksElement() {
    const pathname = usePathname();

    return (
        <>
            {links.map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            'flex items-center gap-3 text-sm rounded-lg px-3 py-2 text-gray-500  transition-all hover:text-primary',
                            {
                                '': pathname === link.href,
                            }
                        )}
                    >
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
            <p className="gap-3 text-sm rounded-lg px-3 py-2 text-gray-500  transition-all hover:text-primary">+ ajouter
                un esp</p>
        </>
    );
}
