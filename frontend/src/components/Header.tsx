import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
    return (
        <header className="bg-header-bg text-header-text shadow">
            <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
                {/*Logo*/}
                <Link to='/' className='text-3xl font-bold text-text-primary flex-shrink-0'>
                    Movie <span className="text-accent-text">Website</span>
                </Link>

                {/*Navigation*/}
                <nav className="flex-1 flex justify-center">
                    <ul className="flex gap-8 text-md font-semibold text-text-primary [&>li>a:hover]:[color:var(--accent-text)]">
                        <li>
                                <Link to='/' className="transition">Home</Link>
                        </li>
                        <li>
                                <Link to='/categories' className="transition">Categories</Link>
                        </li>
                        <li>
                                <Link to='/about' className="transition">About Us</Link>
                        </li>
                        <li>
                                <Link to='/contact' className="transition">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
