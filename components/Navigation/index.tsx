import React from 'react'

const menu_items = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Posts',
        link: '/blog'
    },
    {
        name: 'About us',
        link: '/about-us'
    },
    {
        name: 'Events',
        link: '/events'
    },
    {
        name: 'Contact us',
        link: '/contact-us'
    },

]

function Navigation() {
    return (
        <div className="container m-auto">
            <header className="flex justify-between pt-12 pb-6 items-center">
                <img width={55} src="/logo.svg" />
                <nav>
                    <ul className="flex">
                        {menu_items.map((item, index) => (
                            <li
                                key={index}
                                className="mx-4"
                            >
                                <a href={item.link}>
                                {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div>
                    <button>Donate</button>
                    <button>Account</button>
                </div>
            </header>
        </div>
    )
}

export default Navigation
