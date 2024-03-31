import { Group, Menu, SimpleGrid, Text } from "@mantine/core";
import React from "react";
import "./style.css";

type MenuItems = {
  href: string;
  label: string;
  color: string;
  specs: { href: string; label: string; img: string }[];
};

type CardItem = {
  name: string;
  image: string;
  menuItems?: MenuItems[];
};
type TopNavProps = {
  card: CardItem[];
};

const TopNav = ({ card }: TopNavProps) => {
  return (
    <Group h="100%" px="md" py={"md"}>
      {card.map((_, index) => {
        return (
          <Menu trigger="hover">
            <div className="header-nav" key={index}>
              <Menu.Target>
                <span>{_.name}</span>
              </Menu.Target>
              {_.menuItems && (
                <Menu.Dropdown>
                  <SimpleGrid cols={3}>
                    {_.menuItems?.map((menuItem) => {
                      return (
                        <div>
                          <Menu.Label c={menuItem.color}>{menuItem.label}</Menu.Label>
                          {menuItem.specs.map((spec) => (
                            <Menu.Item leftSection={<img src={spec.img} />}>{spec.label}</Menu.Item>
                          ))}
                        </div>
                      );
                    })}
                  </SimpleGrid>
                </Menu.Dropdown>
              )}
            </div>
          </Menu>
        );
      })}
    </Group>
  );
};

export default TopNav;
