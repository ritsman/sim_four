import "./App.css";
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
import Style, { loader as styleLoader } from "./Pages/Master/Style";
import Sizeform1 from "./Allforms/master/size/Sizeform1";
import Activity, { loader as activityLoader } from "./Pages/Master/Activity";
import ActivityView, {
  loader as activityViewLoader,
} from "./Pages/Master/ActivityView";
import ActivityEdit, {
  loader as activityEditLoader,
} from "./Pages/Master/ActivityEdit";
import { action as activityEditAction } from "./Pages/Master/ActivityForm";
import Process, { loader as processLoader } from "./Pages/Master/Process";
import Location, { loader as locationLoader } from "./Pages/Master/Location";
import ProcessView, {
  loader as processViewLoader,
} from "./Pages/Master/ProcessView";
import LocationView, {
  loader as locationViewLoader,
} from "./Pages/Master/LocationView";
import LocationEdit, {
  loader as locationEditLoader,
} from "./Pages/Master/LocationEdit";
import ProcessEdit, {
  loader as processEditLoader,
} from "./Pages/Master/ProcessEdit";
import { action as locationEditAction } from "./Pages/Master/LocationForm";
import { action as processEditAction } from "./Pages/Master/Processformm";
import Group, { loader as groupLoader } from "./Pages/Master/Group";
import GroupView, { loader as groupViewLoader } from "./Pages/Master/GroupView";
import GroupEdit, { loader as groupEditLoader } from "./Pages/Master/GroupEdit";
import { action as groupEditAction } from "./Pages/Master/GroupForm";
import Size, { loader as sizeLoader } from "./Pages/Master/Size";
import SizeView, { loader as sizeViewLoader } from "./Pages/Master/SizeView";
import SizeEdit, { loader as sizeEditLoader } from "./Pages/Master/SizeEdit";
import { action as sizeEditAction } from "./Pages/Master/SizeForm";
import SizeForm1 from "./Allforms/master/size/Sizeform1";

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
          {
            path: "activity",
            element: <Activity />,
            loader: activityLoader,
          },
          {
            path: "activity/:activityId",
            element: <ActivityView />,
            loader: activityViewLoader,
          },
          {
            path: "activity/:activityId/Edit",
            element: <ActivityEdit />,
            loader: activityEditLoader,
            action: activityEditAction,
          },
          {
            path: "process",
            element: <Process />,
            loader: processLoader,
          },
          {
            path: "process/:processId",
            element: <ProcessView />,
            loader: processViewLoader,
          },
          {
            path: "process/:processId/Edit",
            element: <ProcessEdit />,
            loader: processEditLoader,
            action: processEditAction,
          },
          {
            path: "location",
            element: <Location />,
            loader: locationLoader,
          },
          {
            path: "location/:locationId",
            element: <LocationView />,
            loader: locationViewLoader,
          },
          {
            path: "location/:locationId/Edit",
            element: <LocationEdit />,
            loader: locationEditLoader,
            action: locationEditAction,
          },
          {
            path: "group",
            element: <Group />,
            loader: groupLoader,
          },
          {
            path: "group/:groupId",
            element: <GroupView />,
            loader: groupViewLoader,
          },
          {
            path: "group/:groupId/Edit",
            element: <GroupEdit />,
            loader: groupEditLoader,
            action: groupEditAction,
          },
          {
            path: "size",
            element: <Size />,
            loader: sizeLoader,
          },
          {
            path: "size/:sizeId",
            element: <SizeView />,
            loader: sizeViewLoader,
          },
          {
            path: "size/:sizeId/Edit",
            element: <SizeEdit />,
            loader: sizeEditLoader,
            action: sizeEditAction,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/sizeform1",
    element: <SizeForm1 />,
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
}
