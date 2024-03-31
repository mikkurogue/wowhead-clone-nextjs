import { NavLink } from "@mantine/core";
import Image from "next/image";
import React from "react";

type NavbarLinkProps = {
  href: string;
  label: string;
  img?: string;
};

const NavbarLinks = ({ href, label, img }: NavbarLinkProps) => {
  return <NavLink href={href} label={label} leftSection={img && <Image alt="" src={img} height={20} width={20} />} />;
};

export default NavbarLinks;
