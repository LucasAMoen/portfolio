import "./terrain.css";
import { useCallback } from "react";
import { mount } from "./main";

export default function Main() {
  const containerRef = useCallback(mount, []);
  return <div className="terrain-container" ref={containerRef}></div>;
}
