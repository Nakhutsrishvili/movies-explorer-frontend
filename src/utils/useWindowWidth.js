import { useEffect, useState } from "react";

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function changeWindowWidth() {
    setWindowWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", changeWindowWidth);

    return () => {
      window.removeEventListener("resize", changeWindowWidth);
    };
  }, []);

  return windowWidth;
}

export default useWindowWidth;
