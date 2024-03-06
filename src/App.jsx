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
import Unit from "./Pages/Master/Unit";
import Master from "./Pages/Master/Master";
import Dashboard from "./Pages/Dashboard";
import MasterIndex from "./Pages/Master/Master-Index";
import LoginForm from "./Pages/Login";
// import Unitpara from "./Allforms/Unitpara";
import Unitpara, {action as unitAction} from "./Allforms/master/unit/Unitpara";
import Itemform, {action as itemAction} from "./Allforms/master/item/Itemform";
import LocationForm, {action as locationAction} from "./Allforms/master/location/LocationForm";
import Partyform, {action as partyAction} from "./Allforms/master/party/Partyform";
import Styleform, {action as styleAction} from "./Allforms/master/styleform/Styleform";
import Calender from "./Allforms/master/calender/Calender";
// import Event from "./Allforms/master/evencalender/Event";
// import Eventhandle from "./Allforms/master/evencalender/Eventhandle";
// import Event from "./Allforms/master/evencalender/Event";
import Eventhandle from "./Allforms/master/evencalender/Eventhandle";
import Tabform from "./Allforms/master/tab/Tabform";
import Searching_field from "./Allforms/master/item/Searching_field";
import Sizeform,  {action as sizeAction} from "./Allforms/master/sizeForm/Sizeform";
import DemoForm ,{action as demoAction}from "./Allforms/master/DemoForm";


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
          },
          {
            path: "party/:partyId",
            element: <PartyView />,
            loader: viewLoader,
          },
          {
            path: "unit",
            element: <Unit />,
            loader: viewLoader,
          },
         
         
        ],
      },
    ],
  },
  // {
  //   path:"unitpara",
  //   element:<Unitpara/>,
  // },
  {
    path:"unitpara",
    element:<Unitpara />,
    action: unitAction
  },
  {
    path:"/itemform",
    element:<Itemform />,
    action: itemAction
  },
  {
    path: "/field",
    element: <Searching_field />
   
  },
  {
    path: "/locationform",
    element: <LocationForm />,
    action: locationAction
  },
  {
    path: "/partyform",
    element: <Partyform />,
    action: partyAction
  },
  {
    path: "/styleform",
    element: <Styleform />,
    action: styleAction
  },
  {
    path: "/calender",
    element: <Calender />,
  },
  {
    path: "/eventhandle",
    element: <Eventhandle />,
  },
  {
    path: "/demoform",
    element: <DemoForm />,
    action:demoAction
  },
  {
    path: "/tabform",
    element: <Tabform />,
  },
  {
    path:"/sizeform",
    element:<Sizeform />,
    action: sizeAction

  },


  {
    path: "/login",
    element: <LoginForm />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
