import { Flex, Text } from "@mantine/core";
import NewsFeed from "rogue/components/NewsFeed/NewsFeed";

export default function Home() {
  return (
    <Flex direction={"column"}>
      <NewsFeed>
        <NewsFeed.Title text="Wow News" />

        <NewsFeed.Item
          title="Season 4 release april 23"
          description="Blizzard has announced that Dragonflight Season 4 launches on April 23rd! "
          image="/images/dragonflight-banner.jpg"
          posted={new Date()}
          tag="WOW"
        />
        <NewsFeed.Item
          title="Season 4 release april 23"
          description="Blizzard has announced that Dragonflight Season 4 launches on April 23rd! "
          image="/images/dragonflight-banner.jpg"
          posted={new Date()}
          tag="WOW"
        />
        <NewsFeed.Item
          title="Season 4 release april 23"
          description="Blizzard has announced that Dragonflight Season 4 launches on April 23rd! "
          image="/images/dragonflight-banner.jpg"
          posted={new Date()}
          tag="WOW"
        />
        <NewsFeed.Item
          title="Season 4 release april 23"
          description="Blizzard has announced that Dragonflight Season 4 launches on April 23rd! "
          image="/images/dragonflight-banner.jpg"
          posted={new Date()}
          tag="WOW"
        />
        <NewsFeed.Item
          title="Season 4 release april 23"
          description="Blizzard has announced that Dragonflight Season 4 launches on April 23rd! "
          image="/images/dragonflight-banner.jpg"
          posted={new Date()}
          tag="WOW"
        />
        <NewsFeed.Item
          title="Season 4 release april 23"
          description="Blizzard has announced that Dragonflight Season 4 launches on April 23rd! "
          image="/images/dragonflight-banner.jpg"
          posted={new Date()}
          tag="WOW"
        />
        <NewsFeed.Item
          title="Season 4 release april 23"
          description="Blizzard has announced that Dragonflight Season 4 launches on April 23rd! "
          image="/images/dragonflight-banner.jpg"
          posted={new Date()}
          tag="WOW"
        />
      </NewsFeed>
    </Flex>
  );
}
