import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return(
    <nav className="md:nav md:bg-gray-600 bg-green-300">
      <ul className="lg:px-10 lg:h-14 lg:flex list-none mx-auto">
        <li className="text-white py-3 pr-10 block text-xl transition duration-300 ease-in-out hover:text-blue-400">
          <Link href="/about" className="no-underline">
            About
          </Link>
        </li>
        <li className="text-white py-3 pr-10 block text-xl transition duration-300 ease-in-out hover:text-blue-400">
          <Link href="/">
            Event
          </Link>
        </li>
      </ul>
    </nav>
  );
}