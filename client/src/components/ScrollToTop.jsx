import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Component used to scroll user to top of the page on url change.
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
