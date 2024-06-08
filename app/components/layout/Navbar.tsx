import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="font-mono mb-16 border-b-2 border-gray-200 shadow-sm rounded-lg">
        <div className="justify-between flex py-6 w-[90%] mx-auto items-center">
            <Link href={'/'} className="text-2xl font-semibold">Blog<span className="text-gray-500">Post</span></Link>

            <div className="space-x-5 hidden sm:block">
                <Link className="transition-transform" href={'/'}>Home</Link>
                <Link className="transition-transform" href={'/blogs'}>Blogs</Link>
                <Link className="transition-transform" href={'/'}>Services</Link>
                <Link className="transition-transform" href={'/'}>About</Link>
            </div>

            <div className="sm:hidden block">
                burgermenu
            </div>
        </div>
    </nav>
  )
}

export default Navbar