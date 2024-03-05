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
import Unitpara from "./Allforms/master/unit/Unitpara";
import Itemform from "./Allforms/master/item/Itemform";
import LocationForm from "./Allforms/master/location/LocationForm";
import Partyform from "./Allforms/master/party/Partyform";
import Styleform from "./Allforms/master/styleform/Styleform";
import Calender from "./Allforms/master/calender/Calender";
// import Event from "./Allforms/master/evencalender/Event";
// import Eventhandle from "./Allforms/master/evencalender/Eventhandle";
// import Event from "./Allforms/master/evencalender/Event";
import Eventhandle from "./Allforms/master/evencalender/Eventhandle";
import Tabform from "./Allforms/master/tab/Tabform";
import Suggestion from "./Allforms/master/suggestionbox/Suggestion";
import Sizeform from "./Allforms/master/size/Sizeform";
import Unitform from "./Allforms/master/Unitform/Unitform";
// import Unitpara from "./Pages/Master/Unitpara";


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
    element:<Unitpara />
  },
  {
    path:"/itemform",
    element:<Itemform />
  },
  {
    path: "/locationform",
    element: <LocationForm />,
  },
  {
    path: "/partyform",
    element: <Partyform />,
  },
  {
    path: "/styleform",
    element: <Styleform />,
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
    path: "/tabform",
    element: <Tabform />,
  },
  {
    path: "/suggestion",
    element: <Suggestion />,
  },
  {
    path : "/sizeform",
    element: <Sizeform />,
  },
  {
    path : "/unitform",
    element: <Unitform />,
  },
 
  



  {
    path: "/login",
    element: <LoginForm />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
