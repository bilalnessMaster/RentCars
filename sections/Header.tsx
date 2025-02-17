import Link from "next/link"


const Header = () => {
  return (
    <header className="container py-5 ">
        <nav className="flex w-full justify-between items-center">
            <h1 className="font-bold text-2xl font-outfit">
                LOUER
            </h1>
            <ul className="md:flex gap-3 text-lg  font-geist hidden ">
                <li>
                    <Link href='/voitures'>Nos voitures</Link>
                </li>
                <li>
                    <a href='#contact'>Contact</a>
                </li>
                <li>
                    <Link href='/register' className="bg-black px-4 py-2 rounded-md text-white ">S'inscrire</Link>
                </li>

            </ul>
        </nav>
    </header>
  )
}

export default Header