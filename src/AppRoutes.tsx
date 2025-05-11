import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import { Suspense, lazy } from "react";
// import MainLayout from "./layouts/MainLayout";
import Spinner from "./components/loader/Spinner";
import AuthLayout from "./layouts/AuthLayout";
import PreAnalysisLayout from "./layouts/PreAnalysisLayout";

const PreAnalysis = lazy(() => import("./pages/preAnalysis/PreAnalysis"));
const Signup = lazy(() => import("./pages/auth/SignupPage"));
const Signin = lazy(() => import("./pages/auth/SigninPage"));





const AppRoutes = () => {
  return (
    <Router>
      <Suspense fallback={<Spinner/>}>
        <Routes>

          {/* Auth routes */}
          <Route path="/auth" element={<AuthLayout/>}>
            <Route path="signup" element={<Signup />} />
            <Route path="signin" element={<Signin />} />
            {/* Add more auth routes here */}
          </Route>




          {/* PreAnalysis routes */}
          <Route path="/" element={<PreAnalysisLayout />}>
            <Route index element={<PreAnalysis />} />
            {/* Add more routes here */}
          </Route>



        </Routes>
      </Suspense>

    </Router>

  )
};

export default AppRoutes;
