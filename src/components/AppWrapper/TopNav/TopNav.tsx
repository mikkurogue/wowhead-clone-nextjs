import { Group, Menu, SimpleGrid, Text } from "@mantine/core";
import React from "react";
import "./style.css";
import { CardItem } from "../defaults";

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
                          {menuItem.subMenu?.map((subMenuItem) => (
                            <Menu.Item leftSection={<img src={subMenuItem.img} />}>{subMenuItem.label}</Menu.Item>
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
