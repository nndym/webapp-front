function MegaMenuItem({name}){
    return (
        <div className='hoverable'>
            <span
                className="mx-2 lg:mx-4 font-bold transition-colors hover:text-blue cursor-pointer"
            >
                {name} <i className="las la-angle-down"></i>
                
            </span>
            <div className="mega-menu w-full pt-8 ">
                <div className="bg-white container m-auto rounded-md p-8 animate-fade-in shadow-md">
                    <h1> Large Menu </h1>
                </div>
            </div>
            
        </div>
    )
}

export default MegaMenuItem;