"use client";
import React from "react";
import "../styles/globals.css";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import AppThemeProvider from "@/utility/AppThemeProvider";
import SiteWrapper from "@/components/layouts/SiteWrapper";

const inter = Inter({
  display: "auto",
  subsets: ["latin"],
});

const persistor = persistStore(store);

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen max-w-none bg-white dark:bg-black">
        <Provider store={store}>
          <PersistGate loading={<>loading...</>} persistor={persistor}>
            <AppThemeProvider>
              <SiteWrapper>{children}</SiteWrapper>
            </AppThemeProvider>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
