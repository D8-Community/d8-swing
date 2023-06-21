

import { MemberPageHeader } from "~/components/Section/Member/MemberPageHeader";
import { MemberPageFilter } from "~/components/Section/Member/MemberPageFilter";
import { MemberPageInfo } from "~/components/Section/Member/MemberPageInfo";

export default function Member() {
  return (
    <>
        <section className="page-header-section style-1">
            <MemberPageHeader />
        </section>
        <section className="member-section">
            <div className="container">
                <div className="member-filter">
                    <MemberPageFilter />
                </div>
                <div className="member-wrapper">
                    <MemberPageInfo />
                    
                </div>
            </div>
        </section>
    </>
  );
}

export function meta () {
    return [
      { title: "Online Dating App | Members" },
      { name: "description", content: "Welcome members" },
    ];
};
