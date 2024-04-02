import React from "react";
import { NewsFeedTitleProps } from "./types";
import { Divider, Text } from "@mantine/core";

const NewsFeedTitle = ({ text }: NewsFeedTitleProps) => {
  return (
    <Divider
      label={
        <Text fz={26} tt={"uppercase"} fw={600} c={"#c6c6c6"}>
          {text}
        </Text>
      }
    />
  );
};

export default NewsFeedTitle;
