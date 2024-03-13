import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./RootLayout";
import ErrorPage from "./Pages/error-page";
import Party from "./Pages/Master/Party";
import PartyView, { loader as viewLoader } from "./Pages/Master/Party-View";
// import PartyEdit, {
//   action as editAction,
//   loader as contactLoader,
// } from "./Pages/Master/Party-Edit"; //action as editAction, // loader as contactLoader,
import PartyEdit, { loader as editLoader } from "./Pages/Master/Party-Edit"; //action as editAction, // loader as contactLoader,
import { action as editAction } from "./Pages/Master/Partyform";
import { action as subActUnit } from "./Pages/Master/Unitpara";
import Master from "./Pages/Master/Master";
import Dashboard from "./Pages/Dashboard";
import MasterIndex from "./Pages/Master/Master-Index";
import LoginForm from "./Pages/Login";
import Unit, { loader as unitLoader } from "./Pages/Master/Unit";
import UnitView, { loader as unitViewLoader } from "./Pages/Master/UnitView";
import ItemView, { loader as itemViewLoader } from "./Pages/Master/ItemView";
import Item, { loader as itemLoader } from "./Pages/Master/Item";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "dashboard/",
        element: <Dashboard />,
      },
      {
        path: "master/",
        element: <Master />,
        children: [
          {
            index: true,
            element: <MasterIndex />,
          },
          {
            path: "party/",
            element: <Party />,
          },
          {
            path: "party/:partyId/Edit",
            element: <PartyEdit />,
            loader: editLoader,
            action: editAction,
          },
          {
            path: "party/:partyId",
            element: <PartyView />,
            loader: viewLoader,
          },
          {
            path: "unit",
            element: <Unit />,
            loader: unitLoader,
          },
          {
            path: "unit/:unitId",
            element: <UnitView />,
            loader: unitViewLoader,
          },
          {
            path: "item",
            element: <Item />,
            loader: itemLoader,
          },
          {
            path: "item/:itemId",
            element: <ItemView />,
            loader: itemViewLoader,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
