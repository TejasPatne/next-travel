import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function Navbar() {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
        <Link href='/'>
          <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
        </Link>

        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className="flexCenter text-gray-50 regular-16 cursor-pointer transition-all pb-1.5 hover:font-semibold">
              {link.label}
            </Link>
          ))}
        </ul>

        <div className="hidden lg:flexCenter">
            <Button type="button" title="Login" icon="/user.svg" variant="btn_dark_green" />
        </div>

        <Image src="menu.svg" alt="menu" width={32} height={32} className="inline-block cursor-pointer lg:hidden" />
    </nav>
  )
}
