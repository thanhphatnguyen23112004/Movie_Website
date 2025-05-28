import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className='min-h-[60vh] flex flex-col items-center justify-center text-center px-auto'>
            <h1 className='text-7xl font-bold text-accent-text mb-4'>404</h1>
            <h2 className='text-2xl font-semibold mb-2 text-text-primary'>Page Not Found</h2>
            <p className="mb-10 text-text-primary">
                Sorry, the page you are looking for does not exist or has been moved.
            </p>
            <Link to='/'>
                <Button className='text-base font-semibold bg-accent text-bg-primary px-12 py-6 hover:opacity-80'>
                    Go Home
                </Button>
            </Link>
        </div>
    )
}
