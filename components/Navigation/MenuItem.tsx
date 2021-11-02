import Link from 'next/link'

function MenuItem({ name, link }) {

    return (
        <Link
            href={link}
            passHref
        >
            <a 
                className=" mx-2 lg:mx-4 font-bold transition-colors hover:text-blue"
            >
            {name}
            </a>
        </Link>

    )
}

export default MenuItem;