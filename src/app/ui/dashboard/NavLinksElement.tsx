'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import clsx from 'clsx';
import {HomeIcon} from './homeIcon';
import {PlanIcon} from "@/app/ui/dashboard/planIcon";

const links = [
    {name: 'Dashboard', href: '/dashboard', icon: HomeIcon},
    {name: 'Plan', href: '/dashboard/plan', icon: PlanIcon},
];

export default function NavLinksElement() {
    const pathname = usePathname();

    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            'flex items-center gap-3 text-sm rounded-lg px-3 py-2 text-gray-500  transition-all hover:text-primary',
                            {
                                'text-gray-900': pathname === link.href,
                            }
                        )}
                    >
                        <LinkIcon/>
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}