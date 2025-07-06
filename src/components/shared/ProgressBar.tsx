import NProgress from "nprogress";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ProgressBar() {
  const location = useLocation();

  useEffect(() => {
    NProgress.start();
    NProgress.done();
  }, [location]);

  return null;
}
