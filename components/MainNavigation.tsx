
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
    return (
        <nav
            aria-label="Main navigation"
            className="hidden md:flex justify-center w-full"
        >
            <ul className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
                {mainNavLinks.map((link, index) => (
                    <li key={link.path} className="flex items-center">
                        <RouterNavLink
                            to={link.path}
                            end={link.path === '/'}
                            className={({ isActive }) =>
                                `text-sm lg:text-base font-bold text-white uppercase tracking-widest transition-colors duration-300 hover:text-brand-secondary
                                ${isActive ? 'text-brand-secondary' : ''}`
                            }
                        >
                            {t(link.label)}
                        </RouterNavLink>
                        {index < mainNavLinks.length - 1 && (
                            <span className="ml-6 text-white/40 text-sm">|</span>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default MainNavigation;
