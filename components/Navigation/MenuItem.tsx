import Link from 'next/link'

function MenuItem({ name, link, mobile = false }) {

    return (
        <Link
            href={link}
            passHref
            scroll={false}
        >
            <a 
                className={ (mobile ? "my-1 block" : "mx-2 lg:mx-4") + " font-bold transition-colors hover:text-blue"}
            >
            {name}
            </a>
        </Link>

    )
}

export default MenuItem;