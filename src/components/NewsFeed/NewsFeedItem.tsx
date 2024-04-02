import React from "react";
import { NewsFeedItemProps } from "./types";
import { Flex, Text } from "@mantine/core";
import Image from "next/image";

import "./styles.css";

const NewsFeedItem = ({ image, description, posted, tag, title }: NewsFeedItemProps) => {
  return (
    <Flex gap={15} className="news-feed-item" mb={20}>
      <Image width={327} height={230} alt="" src={image} className="image" />
      <Flex direction={"column"} h={230}>
        <Text fz={24} tt={"uppercase"} fw={500} className={"title"}>
          {title}
        </Text>
        <Text c={"dimmed"}>{description}</Text>

        <Text
          c={"dimmed"}
          fz={12}
          style={{
            position: "relative",
            bottom: -130,
          }}>
          {posted.toDateString()}
        </Text>
      </Flex>
    </Flex>
  );
};

export default NewsFeedItem;
