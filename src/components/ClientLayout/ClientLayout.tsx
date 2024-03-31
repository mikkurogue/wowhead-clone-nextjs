"use client";

import { MantineProvider } from "@mantine/core";
import React, { ReactNode } from "react";
import AppWrapper from "../AppWrapper/AppWrapper";

type ClientLayoutProps = {
  children: ReactNode;
};

const ClientLayout = ({ children }: ClientLayoutProps) => {
  return (
    <MantineProvider>
      <AppWrapper>{children}</AppWrapper>{" "}
    </MantineProvider>
  );
};

export default ClientLayout;
