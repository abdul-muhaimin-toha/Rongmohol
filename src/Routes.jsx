import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./RootLayout";
import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/RegistrationPage";
import PrivateRoute from "./privateRoutes/PrivateRoute";
import SignInPage from "./pages/SIgnInPage";
import AddArtPage from "./pages/AddArtPage";
import UpdateArtPage from "./pages/UpdateArtPage";
import ArtDetailsPage from "./pages/ArtDetailsPage";
import AllArtTablePage from "./pages/AllArtTablePage";
import MyArtPage from "./pages/MyArtPage";
import AllArts from "./pages/ALLArts";
import ErrorPage from "./pages/ErrorPage";
import ArtsCategory from "./pages/ArtsCategory";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route index element={<HomePage />} />
      <Route path="registration" element={<RegistrationPage />} />
      <Route path="sign-in" element={<SignInPage />} />
      <Route
        path="add-art"
        element={
          <PrivateRoute>
            <AddArtPage />
          </PrivateRoute>
        }
      />
      <Route
        path="update-art/:id"
        element={
          <PrivateRoute>
            <UpdateArtPage />
          </PrivateRoute>
        }
      />
      <Route
        path="art-details/:id"
        element={
          <PrivateRoute>
            <ArtDetailsPage />
          </PrivateRoute>
        }
      />
      <Route
        path="arts-db"
        element={
          <PrivateRoute>
            <AllArtTablePage />
          </PrivateRoute>
        }
      />
      <Route
        path="my-arts"
        element={
          <PrivateRoute>
            <MyArtPage />
          </PrivateRoute>
        }
      />
      <Route
        path="all-arts"
        element={
          <PrivateRoute>
            <AllArts />
          </PrivateRoute>
        }
      />
      <Route
        path="arts-category/:category"
        element={
          <PrivateRoute>
            <ArtsCategory />
          </PrivateRoute>
        }
      />
      {/* <Route path="*" element={<ErrorPage />} /> */}
    </Route>,
  ),
);
