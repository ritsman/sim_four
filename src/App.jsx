import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./RootLayout";
import ErrorPage from "./Pages/error-page";
import Party2, { loader as partyLoader } from "./Pages/Master/Party2";
import PartyView, { loader as viewLoader } from "./Pages/Master/Party-View";
import PartyEdit, { loader as editLoader } from "./Pages/Master/Party-Edit";
import { action as editAction } from "./Pages/Master/Partyformm";
import Master from "./Pages/Master/Master";
import Dashboard from "./Pages/Dashboard";
import MasterIndex from "./Pages/Master/Master-Index";
import LoginForm from "./Pages/Login";
import Unit2, { loader as unitLoader } from "./Pages/Master/Unit2";
import UnitView, { loader as unitViewLoader } from "./Pages/Master/UnitView";
import ItemView, { loader as itemViewLoader } from "./Pages/Master/ItemView";
import Item, { loader as itemLoader } from "./Pages/Master/Item";
import ItemEdit, { loader as itemEditLoader } from "./Pages/Master/ItemEdit";
import UnitEdit, { loader as unitEditLoader } from "./Pages/Master/UnitEdit";
import { action as unitEditAction } from "./Pages/Master/UnitForm";
import { action as itemEditAction } from "./Pages/Master/ItemForm";
import MyForm from "./Pages/Master/MyForm";
import NavigationPane from "./Components/NavigationPane";

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
        path: "navigate/",
        element: <NavigationPane />,
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
            element: <Party2 />,
            loader: partyLoader,
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
            element: <Unit2 />,
            loader: unitLoader,
          },
          {
            path: "unit/:unitId",
            element: <UnitView />,
            loader: unitViewLoader,
          },
          {
            path: "unit/:unitId/Edit",
            element: <UnitEdit />,
            loader: unitEditLoader,
            action: unitEditAction,
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
          {
            path: "item/:itemId/Edit",
            element: <ItemEdit />,
            loader: itemEditLoader,
            action: itemEditAction,
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
