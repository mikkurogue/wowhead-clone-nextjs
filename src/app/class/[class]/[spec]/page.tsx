import { Flex } from "@mantine/core";
import React from "react";
import SpecGuideTitle from "rogue/components/SpecGuide/SpecGuideTitle";

type PageProps = {
  params: {
    class: string;
    spec: string;
  };
};

const Page = ({ params }: PageProps) => {
  return (
    <Flex direction={"column"} gap={15}>
      <SpecGuideTitle params={params} />
    </Flex>
  );
};

export default Page;
