'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { HomeIcon } from './homeIcon';
import {PlanIcon} from "@/app/ui/dashboard/planIcon";

const links = [
    { name: 'Home', href: '/dashboard', icon: HomeIcon },
    { name: 'Plan', href: '/dashboard/plan', icon: PlanIcon },
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
                            'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
                            {
                                'bg-gray-100 text-black': pathname === link.href,
                            }
                        )}
                    >
                        <LinkIcon />
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}
