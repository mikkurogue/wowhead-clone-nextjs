"use client";

import { MantineProvider } from "@mantine/core";
import React, { ReactNode } from "react";
import AppWrapper from "../AppWrapper/AppWrapper";
import Footer from "../Footer/Footer";

type ClientLayoutProps = {
  children: ReactNode;
};

const ClientLayout = ({ children }: ClientLayoutProps) => {
  return (
    <MantineProvider defaultColorScheme="dark">
      <AppWrapper>{children}</AppWrapper>
      <Footer />
    </MantineProvider>
  );
};

export default ClientLayout;
