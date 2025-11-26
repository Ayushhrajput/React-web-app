import { Link, NavLink } from 'react-router-dom';


function HeaderBox() {

    return (
        <header className='sticky top-0'>
            <nav className='w-full'>
                <div className="flex flex-wrap justify-around h-12 bg-white p-1">
                    <Link to="/" className='flex items-center'>
                        <img src="https://i.etsystatic.com/38919662/r/il/7f220c/4341594072/il_75x75.4341594072_pmsz.jpg" className='h-10' alt="" />
                    </Link>
                    <div className="hidden lg:inline-flex flex gap-4 items-center order-2">
                        <Link to="/">
                        Log in
                        </Link>
                        <Link to="/" className='border-b-2 py-1 '>
                        Get Started
                        </Link>
                    </div>
                    <div className="flex order-1">
                        <ul className='flex justify-around mx-4 lg:w-60 items-center gap-4'>
                            <li>
                                <NavLink to="/" className={({isActive}) =>`py-1 ${isActive? "border-b-2": "border-b-0"} border-gray-900`}>
                                Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="about" className={({isActive}) =>`py-1 ${isActive? "border-b-2": "border-b-0"} border-gray-900`}>
                                About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="gracie" className={({isActive}) =>`py-1 ${isActive? "border-b-2": "border-b-0"} border-gray-900`}>
                                Gracie
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )

}

export default HeaderBox