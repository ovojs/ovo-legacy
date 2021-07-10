import React, { useEffect, useRef } from "react";
import O from "@ovojs/ovo";
import { OvOProps } from "./types";
import "@ovojs/ovo/dist/style.css";

export default function OvO(props: OvOProps): JSX.Element {

  const ref = useRef<HTMLDivElement>(null);

  useEffect(function () {
    if (!ref.current) return;

    const o = new O({
      target: ref.current,
      props
    })

    return function () {
      o.$destroy();
    }
  }, []);

  return <div ref={ref}></div>
}
