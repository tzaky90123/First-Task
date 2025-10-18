import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { useLocalization } from '../context/LocalizationContext';
import { NavLink as NavLinkType } from '../types';

const mainNavLinks: NavLinkType[] = [
    { label: 'navHome', path: '/' },
    { label: 'navAbout', path: '/a-propos' },
    { label: 'navBTP', path: '/btp' },
    { label: 'navRealEstate', path: '/promotion-immobiliere' },
    { label: 'navMines', path: '/mines' },
    { label: 'navCareers', path: '/carrieres' },
    { label: 'navContact', path: '/contact' },
];

const MainNavigation: React.FC = () => {
    const { t } = useLocalization();

    // This navigation is designed to be part of the hero section and is hidden on mobile.
    // Mobile navigation is handled by the main Header component's overlay menu.
    return (
        <nav
            aria-label="Main navigation"
            className="hidden md:flex justify-center"
        >
            <ul className="flex justify-center items-center space-x-8">
                {mainNavLinks.map(link => (
                    <li key={link.path}>
                        <RouterNavLink
                            to={link.path}
                            end={link.path === '/'}
                            className={({ isActive }) =>
                                `relative block py-2 px-1 text-sm font-medium text-white uppercase tracking-widest transition-opacity duration-300 ease-in-out
                                ${isActive ? 'opacity-100' : 'opacity-70 hover:opacity-100'}
                                after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[1px] after:bg-brand-secondary after:transition-all after:duration-300
                                ${isActive ? 'after:w-full' : 'hover:after:w-full'}`
                            }
                        >
                            {t(link.label)}
                        </RouterNavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default MainNavigation;