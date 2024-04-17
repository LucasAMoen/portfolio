import "./cube.css";
import { useCallback } from "react";
import { mount } from "./main";

export default function Main() {
  const containerRef = useCallback(mount, []);
  return <div className="cube-container" ref={containerRef}></div>;
}
