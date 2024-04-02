import React from "react";
import NewsFeedItem from "./NewsFeedItem";
import NewsFeedTitle from "./NewsFeedTitle";
import { NewsFeedProps } from "./types";
import { ScrollArea } from "@mantine/core";

import "./styles.css";

const NewsFeed = ({ children }: NewsFeedProps) => {
  return (
    <ScrollArea h={900} type="never" mt={25}>
      {children}
    </ScrollArea>
  );
};

NewsFeed.Item = NewsFeedItem;
NewsFeed.Title = NewsFeedTitle;

export default NewsFeed;
