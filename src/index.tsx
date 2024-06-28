import React from "react";
import ReactDOM from "react-dom/client";
import "./i18n";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue } from "@mui/material/colors";
import Root from "./routes/root";
import LandingPage from "./routes/landingpage";
import SignUp from "./routes/signup";
import SingIn from "./routes/signin";
import Coachs, { loader as coachsLoader } from "./routes/list-coachs";
import CoachDetails, {
  loader as coachDetailsLoader,
} from "./routes/coach-details";
import ErrorPage from "./error-page";
import "./index.css";

const theme = createTheme({
  palette: {
    // primary: deepOrange,
    primary: {
      // main: "#f07c0b",
      main: "#001d33",
    },
    secondary: { main: blue[500] },
  },
});
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <LandingPage />,
      },
      {
        path: "coachs/",
        element: <Coachs />,
        loader: coachsLoader,
      },
      {
        path: "coachs/:coachId",
        element: <CoachDetails />,
        loader: coachDetailsLoader,
      },
      {
        path: "signup/",
        element: <SignUp />,
      },
      {
        path: "signin/",
        element: <SingIn />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
