import type { V2_MetaFunction } from "@remix-run/node";

import { BannerSection } from "~/components/Section/Banner/BannerSection";
import { BannerImages } from "~/components/Section/Banner/BannerImages";
import { MemberSection } from "~/components/Section/Member/MemberSection";
import { AboutSection } from "~/components/Section/AboutSection";
import { WorkSection } from "~/components/Section/WorkSection";

import { TopMemberSection } from "~/components/Section/TopMemberSection";
import { StorySection } from "~/components/Section/StorySection";
import { GroupSection } from "~/components/Section/GroupSection";
import { ClientSection } from "~/components/Section/ClientSection";
import { AppSection } from "~/components/Section/AppSection";
//import functionsJS from "~/js/functions.js";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Online Dating App | d8me.live" },
    { name: "description", content: "Welcome to d8me.live" },
  ];
};
export default function Index() {
  return (
    <>
      <section className="banner-section">
        <BannerSection />
        <BannerImages />
      </section>
      <section className="member-section padding-tb">
        <MemberSection />
      </section>
      <section className="about-section padding-tb bg-img">
        <AboutSection />
      </section>
      <section className="work-section padding-tb">
        <WorkSection />
      </section>
      <section className="story-section padding-tb bg-img">
        <StorySection />
      </section>
      <section className="top-member-section padding-tb" hidden>
        <TopMemberSection />
      </section>
      <section className="group-section padding-tb bg-img">
        <GroupSection />
      </section>
      <section className="clints-section padding-tb">
        <ClientSection />
      </section>
      <section className="app-section bg-theme">
        <AppSection />
      </section>
    </>
  );
}
