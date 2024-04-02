import { ReactNode } from "react";

type NewsTag = "WOW" | "Live" | "Classic" | "Wrath" | "PTR" | "Beta";

export type NewsFeedProps = {
  children: ReactNode;
};

export type NewsFeedItemProps = {
  title: string;
  description: string;
  image: string;
  tag: NewsTag;
  posted: Date;
};

export type NewsFeedTitleProps = {
  text: string;
};
