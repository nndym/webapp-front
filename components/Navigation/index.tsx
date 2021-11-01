import React from 'react'

function Navigation() {
    return (
        <div className="container m-auto mt-12 mb-6">
            <header className="flex justify-between items-center">
                <img width={55} src="/logo.svg" />
                <nav>
                    <ul className="flex">
                        <li>Home</li>
                        <li>Posts</li>
                        <li>About us</li>
                        <li>Events</li>
                        <li>Cotact us</li>
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
