import Link from "next/link";
import Image from "next/image";
import { MdClose } from "react-icons/md";
export default function Header(props) {
  return (
    <header className="border-b border-indigo-100 mb-10">
      <nav
        className="flex flex-row justify-between items-center py-12 w-full"
        role="navigation"
        aria-label="main navigation"
      >
        <Link href="/" className="flex flex-row items-center gap-1">
          <Image
            width={150}
            height={20}
            src="/logo.png"
            alt="mydavet logo"
            style={{ objectFit: "cover" }}
          />
          <h1 className="text-indigo-800 text-2xl">Blog</h1>
        </Link>
        <Link
          href="https://www.mydavet.com"
          className="flex flex-row items-center gap-1 text-indigo-300 font-bold"
        >
          <MdClose className="text-3xl" />
        </Link>
      </nav>
    </header>
  );
}
