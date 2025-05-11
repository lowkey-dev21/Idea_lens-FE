import { Outlet } from "react-router-dom";
import AuthHeader from "../components/headers/AuthHeader";
const PreAnalysisLayout = () => {
  return (
    <div>
      <header>
        <AuthHeader />
      </header>
      <Outlet />
    </div>
  );
};
export default PreAnalysisLayout;
