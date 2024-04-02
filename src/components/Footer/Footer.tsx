import React from "react";
import Image from "next/image";
import "./style.css";
import { ActionIcon, Container, Group, rem, Text } from "@mantine/core";
import {
  IconBrandDiscord,
  IconBrandDiscordFilled,
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandTwitterFilled,
  IconBrandYoutube,
  IconBrandYoutubeFilled,
} from "@tabler/icons-react";
import { FOOTER_LINKS } from "./defaults";

const Footer = () => {
  const groups = FOOTER_LINKS.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<"a"> key={index} className={"link"} component="a" href={link.link} onClick={(event) => event.preventDefault()}>
        {link.label}
      </Text>
    ));

    return (
      <div className={"wrapper"} key={group.title}>
        <Text className={"title"}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={"footer"}>
      <Container className={"inner"}>
        <div className={"logo"}>
          <Image width={247} height={50} alt="" src={"/images/wowhead-logo.webp"} />
          <Text size="xs" c="dimmed" className={"description"}>
            Small scale POC for wowhead ui revamp
          </Text>
        </div>
        <div className={"groups"}>{groups}</div>
      </Container>
      <Container className={"afterFooter"}>
        <Text c="dimmed" size="sm">
          © 2024 mikkurogue. All rights reserved.
        </Text>

        <Group gap={0} className={"social"} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandDiscordFilled color="#5865F2" style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitterFilled color="#1DA1F2" style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutubeFilled color="#FF0000" style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandFacebookFilled color="#1877F2" style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
};

export default Footer;
