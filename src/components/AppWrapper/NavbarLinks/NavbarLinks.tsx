import { NavLink } from "@mantine/core";
import Image from "next/image";
import React, { ReactNode } from "react";

type NavbarLinkProps = {
  href: string;
  label: string;
  img?: string;
  icon?: ReactNode;
};

const NavbarLinks = ({ href, label, img, icon }: NavbarLinkProps) => {
  return <NavLink href={href} label={label} leftSection={(img && <Image alt="" src={img} height={20} width={20} />) || (icon && icon)} />;
};

export default NavbarLinks;
