import { Link } from "react-router-dom";


export default function Footer() {
    return (
        <footer className="bg-footer-bg text-footer-text flex flex-col ">

            {/*Main*/}
            <div className=" max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-7 gap-8">
                    {/*Information*/}
                    <div className="flex flex-col gap-5 md:col-span-3 col-span-1 ">
                        <h3 className="text-3xl font-bold text-accent-text">Movie Website</h3>
                        <p> <span className="text-accent-text font-semibold">Movie Web - </span>Trang xem phim Online với giao diện mới được bố trí và thiết kế thân thiện với người dùng. Nguồn phim được tổng hợp từ các website lớn với đa dạng các đầu phim và thể loại vô cùng phong phú.</p>

                    </div>

                    {/*Quick Links*/}
                    <div className="md:col-span-1 col-span-1">
                        <h3 className="text-md text-footer-heading font-semibold mt-3 mb-5">Quick Links</h3>
                        <ul className="space-y-2 [&>li>a:hover]:[color:var(--text-primary)] [&>li>a]:transition-all">
                            <li><Link to='/' className="text-md font-semibold text-accent-text">Home</Link> </li>
                            <li><Link to='/' className="text-md font-semibold text-accent-text">About</Link> </li>
                            <li><Link to='/' className="text-md font-semibold text-accent-text">Categories</Link> </li>
                            <li><Link to='/' className="text-md font-semibold text-accent-text">Contact</Link> </li>
                        </ul>
                    </div>

                    {/*Categories*/}
                    <div className="md:col-span-1 col-span-1">
                        <h3 className="text-md text-footer-heading font-semibold mt-3 mb-5">Categories</h3>
                        <ul className="space-y-2 [&>li>a:hover]:[color:var(--text-primary)] [&>li>a]:transition-all ">
                            <li><Link to='/' className="text-md font-semibold text-accent-text">Comedy</Link> </li>
                            <li><Link to='/' className="text-md font-semibold text-accent-text">Action</Link> </li>
                            <li><Link to='/' className="text-md font-semibold text-accent-text">Horror</Link> </li>
                            <li><Link to='/' className="text-md font-semibold text-accent-text">SciFilm</Link> </li>
                        </ul>
                    </div>

                    {/*Contact*/}
                    <div className="md:col-span-2 col-span-1 ">
                        <h3 className="text-footer-heading text-md font-semibold mt-3 mb-5">Contact Us</h3>
                        <form className="flex flex-col gap-2">
                            <input type="email"
                                placeholder="Enter your Email"
                                className="px-3 py-2 rounded text-text border border-border focus:outline-none focus:ring-1 focus:ring-accent"
                            />
                            <button
                                type="submit"
                                className="bg-accent text-footer-bg font-semibold rounded px-3 py-2 mt-2 hover:opacity-80 transition-all"
                            >
                                Send
                            </button>
                        </form>

                        {/*Social Icons*/}
                        <div className="flex gap-4 my-3 ">
                            <a href="#" aria-label="Facebook" className="hover:text-accent transition">
                                <svg className="w-5 h-5 rounded" fill="currentColor" viewBox="0 0 24 24"><path d="M22.68 0H1.32C.59 0 0 .59 0 1.32v21.36C0 23.41.59 24 1.32 24h11.5v-9.29H9.69v-3.62h3.13V8.41c0-3.1 1.89-4.79 4.65-4.79 1.32 0 2.45.1 2.78.14v3.22h-1.91c-1.5 0-1.79.71-1.79 1.75v2.3h3.58l-.47 3.62h-3.11V24h6.09c.73 0 1.32-.59 1.32-1.32V1.32C24 .59 23.41 0 22.68 0" /></svg>
                            </a>
                            <a href="#" aria-label="Twitter" className="hover:text-accent transition">
                                <svg className="w-5 h-5 rounded" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.1 4.07 7.38 1.64 4.7c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.83 1.92 3.61a4.28 4.28 0 0 1-1.94-.54v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.12 2.94 3.99 2.97A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.39-.01-.58A8.7 8.7 0 0 0 24 4.59a8.5 8.5 0 0 1-2.54.7z" /></svg>
                            </a>
                            <a href="#" aria-label="Instagram" className="hover:text-accent transition">
                                <svg className="w-5 h-5 rounded" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.16c3.2 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.41a4.92 4.92 0 0 1 1.68 1.09 4.92 4.92 0 0 1 1.09 1.68c.17.46.354 1.26.41 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.41 2.43a4.92 4.92 0 0 1-1.09 1.68 4.92 4.92 0 0 1-1.68 1.09c-.46.17-1.26.354-2.43.41-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.41a4.92 4.92 0 0 1-1.68-1.09 4.92 4.92 0 0 1-1.09-1.68c-.17-.46-.354-1.26-.41-2.43C2.172 15.634 2.16 15.25 2.16 12s.012-3.584.07-4.85c.056-1.17.24-1.97.41-2.43a4.92 4.92 0 0 1 1.09-1.68 4.92 4.92 0 0 1 1.68-1.09c.46-.17 1.26-.354 2.43-.41C8.416 2.172 8.8 2.16 12 2.16zm0-2.16C8.736 0 8.332.012 7.052.07 5.77.128 4.84.31 4.06.54a7.07 7.07 0 0 0-2.56 1.62A7.07 7.07 0 0 0 .54 4.06c-.23.78-.412 1.71-.47 2.99C.012 8.332 0 8.736 0 12c0 3.264.012 3.668.07 4.948.058 1.28.24 2.21.47 2.99a7.07 7.07 0 0 0 1.62 2.56 7.07 7.07 0 0 0 2.56 1.62c.78.23 1.71.412 2.99.47C8.332 23.988 8.736 24 12 24c3.264 0 3.668-.012 4.948-.07 1.28-.058 2.21-.24 2.99-.47a7.07 7.07 0 0 0 2.56-1.62 7.07 7.07 0 0 0 1.62-2.56c.23-.78.412-1.71.47-2.99.058-1.28.07-1.684.07-4.948 0-3.264-.012-3.668-.07-4.948-.058-1.28-.24-2.21-.47-2.99a7.07 7.07 0 0 0-1.62-2.56A7.07 7.07 0 0 0 19.94.54c-.78-.23-1.71-.412-2.99-.47C15.668.012 15.264 0 12 0zm0 5.838A6.162 6.162 0 1 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.162A4 4 0 1 1 16 12a4 4 0 0 1-4 4zm6.406-11.844a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>


            {/*Copyright*/}
            <div className="bg-footer-bg-secondary">
                <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8 " >
                    <a href="https://github.com/AriesN2503" className="block text-xs font-semibold text-center hover:text-accent transition-all cursor-pointer">© 2025 by Aries</a>
                </div>
            </div>
        </footer>
    )
}
