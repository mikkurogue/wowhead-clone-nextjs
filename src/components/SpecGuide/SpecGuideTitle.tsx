import React from "react";
import { Flex, Text } from "@mantine/core";

type SpecGuideTitleProps = {
  params: {
    class: string;
    spec: string;
  };
};

const SpecGuideTitle: React.FC<SpecGuideTitleProps> = ({ params }: SpecGuideTitleProps) => {
  return (
    <Flex align="center" justify="center" p="xl">
      <Text size="xl" fw={700} tt={"capitalize"}>
        {params.class} - {params.spec}
      </Text>
    </Flex>
  );
};

export default SpecGuideTitle;
