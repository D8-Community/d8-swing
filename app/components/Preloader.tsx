

import { useNavigation } from "@remix-run/react";
import { cx, sleep } from "~/utils"

function Preloader() {
    const navigation = useNavigation();

  const active =
    navigation.state !==  "idle";
  return (
    <div className={active ? "preloader fade visible" : "preloader hidden"}>
        <div className="preloader-inner">
            <div className="preloader-icon">
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
  );
}

export { Preloader };