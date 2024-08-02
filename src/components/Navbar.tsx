"use client"
import Image from 'next/image'
import React, { useState, useRef } from 'react'

interface SubLink {
    title: string;
    link: string;
}

interface NavbarItem {
    title: string;
    link: string;
    subLinks?: SubLink[];
}

const NavbarItems: NavbarItem[] = [
    {
        title: 'Home',
        link: '/'
    },
    {
        title: 'Products',
        link: '/products',
        subLinks: [
            { title: 'SLASH', link: '/slash' },
            { title: 'VPN', link: '/vpn' }
        ]
    },
    {
        title: 'Services',
        link: '/services',
        subLinks: [
            { title: 'Web App Pentesting', link: '/web-app-pentesting' },
            { title: 'Mobile App Pentesting', link: '/mobile-app-pentesting' },
            { title: 'Threat Hunting', link: '/threat-hunting' },
            { title: 'Forensics Investigation', link: '/forensics-investigation' },
            { title: 'Cloud Security', link: '/cloud-security' },
            { title: 'Red Teaming', link: '/red-teaming' }
        ]
    },
    {
        title: 'Compliance',
        link: '/compliance',
        subLinks: [
            { title: 'GDPR Compliance', link: '/gdpr' },
            { title: 'SOC Compliance', link: '/soc' },
            { title: 'NBFC Compliance', link: '/nbfc' }
        ]
    },
    {
        title: 'About',
        link: '/about',
        subLinks: [
            { title: 'About Us', link: '/about-us' },
            { title: 'FAQ', link: '/faq' },
            { title: 'Partners', link: '/partners' },
            { title: 'Testimonials', link: '/testimonials' },
            { title: 'Privacy Policy', link: '/privacy-policy' },
            { title: 'Achievements', link: '/achievements' }
        ]
    },
    {
        title: 'Blog',
        link: '/blog'
    },
    {
        title: 'Contact',
        link: '/contact',
        subLinks: [
            { title: 'Get Quote', link: '/get-quote' }
        ]
    }
]

export default function Navbar() {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [isDropdownVisible, setDropdownVisible] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLUListElement>(null);

    const handleMouseEnter = (title: string) => {
        setHoveredItem(title);
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
        setDropdownVisible(false);
    };

    return (
        <nav className='h-[122px] w-full shadow-md flex items-center'>
            <div className='md:mx-[104px] w-max flex justify-start items-center'>
                <Image src='/secwall_logo.png' alt='logo' width={90} height={36} />
                <div className='mx-6 text-sm text-[#232c3b]'>
                    <ul className='list-none flex flex-wrap items-center my-8 space-x-7 font-sans'>
                        {NavbarItems.map(item => (
                            <li
                                key={item.title}
                                className='relative'
                                onMouseEnter={() => handleMouseEnter(item.title)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <a href={item.link} className='hover:text-red-500'>
                                    {item.title}
                                </a>
                                {item.subLinks && hoveredItem === item.title && (
                                    <ul
                                        ref={dropdownRef}
                                        className={`list-none absolute bg-gray-700 text-gray-400 font-normal w-40 p-3 h-auto flex flex-col items-start space-y-2 transition-all duration-600 ease-linear transform ${
                                            isDropdownVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-0'
                                        }`}
                                        onMouseEnter={() => setDropdownVisible(true)}
                                        onMouseLeave={() => setDropdownVisible(false)}
                                    >
                                        {item.subLinks.map(subLink => (
                                            <li key={subLink.title}>
                                                <a href={subLink.link} className='hover:text-red-600'>
                                                    {subLink.title}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
