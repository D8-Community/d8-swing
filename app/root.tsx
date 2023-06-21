import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigation
} from "@remix-run/react";

import { ErrorPage} from "~/components/ErrorPage";

//import { Preloader } from "~/components/Preloader";
import { HeaderTop } from "~/components/Navigation/HeaderTop";
import { HeaderBottom } from "~/components/Navigation/HeaderBottom";

import { MemberPageHeader } from "~/components/Section/Member/MemberPageHeader";

import { FooterTop } from "~/components/Footer/FooterTop";
import { FooterBottom } from "~/components/Footer/FooterBottom";
import { FooterMiddle} from "~/components/Footer/FooterMiddle";

import animateCSS from "~/css/animate.css";
import bootstrapCSS from "~/css/bootstrap.min.css";
import icofont from "~/css/icofont.min.css";
import swiperCSS from "~/css/swiper.min.css";
import styles from "~/css/style.css";
import { Preloader } from "./components/Preloader";
import stylesheet from "~/tailwind.css";




//import * as functions from "~/js/functions.js";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  {
    rel: "stylesheet",
    href: animateCSS,
  },
  {
    rel: "stylesheet",
    href: bootstrapCSS,
  },
  {
    rel: "stylesheet",
    href: icofont,
  },
  {
    rel: "stylesheet",
    href: swiperCSS,
  },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  {
    rel: "stylesheet",
    href: styles,
  },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Preloader />
        <header className="header-section">
          <HeaderTop />
          <HeaderBottom />
        </header>
        <Outlet />
        <footer className="footer-section">
          <div className="footer-top">
            <FooterTop />
          </div>
          <div className="footer-middle padding-tb">
            <FooterMiddle />
          </div>
          <div className="footer-bottom ">
            <FooterBottom />
          </div>
        </footer>
        
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        
      </body>
    </html>
  );
}
export function ErrorBoundary() {
  
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Preloader />
        <header className="header-section">
          <HeaderTop />
          <HeaderBottom />
        </header>
        <section className="page-header-section style-1">
          <MemberPageHeader />
        </section>
        <section className="fore-zero padding-tb">
          <ErrorPage />
        </section>
        <footer className="footer-section">
        <div className="footer-top">
            <FooterTop />
          </div>
          <div className="footer-middle padding-tb">
            <FooterMiddle />
          </div>
          <div className="footer-bottom ">
            <FooterBottom />
          </div>
        </footer>
      </body>
    </html>
  );
}



