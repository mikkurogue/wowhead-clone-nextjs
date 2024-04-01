import React, { ReactNode } from "react";
import { AppShell, Burger, Container, Divider, Group, Indicator, TextInput, rem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";
import NavbarLinks from "./NavbarLinks/NavbarLinks";
import { IconSearch } from "@tabler/icons-react";
import "./style.css";
import TopNav from "./TopNav/TopNav";
import { BLUEPOST_LINKS, CLASSES } from "./defaults";
import BluePostTracker from "../BluePostTracker/BluePostTracker";

type AppWrapperProps = {
  children: ReactNode;
};

const AppWrapper = ({ children }: AppWrapperProps) => {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md">
      <AppShell.Header>
        <div>
          <Group h="100%" px="md">
            <Indicator hiddenFrom="sm" label={"9+"} inline>
              <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
            </Indicator>
            <Indicator visibleFrom="sm" label={"9+"} inline>
              <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
            </Indicator>
            <Image width={247} height={50} alt="" src={"/images/wowhead-logo.webp"} />
            <TextInput placeholder="Search guides, news, database..." leftSection={<IconSearch style={{ width: rem(12), height: rem(12) }} stroke={1.5} />} />

            <TopNav
              card={[
                {
                  image: "/images/wow-logo.svg",
                  name: "Classes",
                  menuItems: CLASSES,
                },
                {
                  image: "/images/wow-logo.svg",
                  name: "Raid",
                },
                {
                  image: "/images/wow-logo.svg",
                  name: "Mythic+",
                },
                {
                  image: "/images/wow-logo.svg",
                  name: "Professions",
                },
              ]}
            />
          </Group>
        </div>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        {[
          { href: "#", label: "WoW", img: "/images/wow-logo.svg" },
          { href: "#", label: "Classic", img: "/images/wow-classic-logo.svg" },
          { href: "#", label: "Wrath", img: "/images/wow-wrath-logo.svg" },
          { href: "#", label: "Cataclysm", img: "/images/wow-cata-logo.svg" },
        ].map((_, index) => (
          <NavbarLinks href={_.href} label={_.label} img={_.img} key={index} />
        ))}
        <Divider my={"md"} />
      </AppShell.Navbar>
      <AppShell.Main>
        <Container>
          <BluePostTracker bluePostLinks={BLUEPOST_LINKS} />
          {children}
        </Container>
      </AppShell.Main>
    </AppShell>
  );
};

export default AppWrapper;
