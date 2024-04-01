import React from "react";
import "./style.css";
import { Text } from "@mantine/core";
import Image from "next/image";

type BluePostLink = {
  href: string;
  title: string;
};

type BluePostTrackerProps = {
  bluePostLinks: BluePostLink[];
};

const BluePostTracker = ({ bluePostLinks }: BluePostTrackerProps) => {
  return (
    <div className="blue-post-container">
      <Text fz={20} mb={5} fw={"bold"}>
        Recent Blizzard posts
      </Text>
      <div className="blue-post-grid">
        {bluePostLinks.map((bluePost) => (
          <Text className="bluepost-color link">
            <Image alt="" height={14} width={20} src="/images/blizz-icon-small.svg" /> {bluePost.title}
          </Text>
        ))}
      </div>
    </div>
  );
};

export default BluePostTracker;
