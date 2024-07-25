"use client";
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@/components/components";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

function NavList() {
  const navLinks = [
    {
      link: "/",
      name: "Beranda",
    },
    {
      link: "/jalur-pendaftaran",
      name: "Jalur Pendaftaran",
    },
    {
      link: "/lacak-pendaftaran",
      name: "Lacak Pendaftaran",
    },
  ];

  const pathname = usePathname();
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {navLinks.map((nav) => (
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium" key={nav.link}>
          <Link
            href={nav.link}
            className={`flex items-center hover:underline  transition-colors ${
              pathname == nav.link ? "underline font-bold" : ""
            }`}>
            {nav.name}
          </Link>
        </Typography>
      ))}
    </ul>
  );
}

export function NavbarComponent() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="sticky top-0 z-10 lg:h-24 max-w-full rounded-none lg:px-36 shadow-md lg:py-6">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link href={"/"} className="flex items-center gap-2 lg:gap-4">
          <Image src={"/logo-sthg.png"} width={50} height={50} alt="logo" />
          <div className="hidden lg:block">
            <Typography>Penerimaan Mahasiswa Baru</Typography>
            <Typography
              variant="h6"
              className="mr-4 cursor-pointer lg:text-lg">
              Sekolah Tinggi Hukum Galunggung
            </Typography>
            
          </div>
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}>
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
