import React from "react";
import { useAuth } from "../../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";
import { ProgressBarComponent } from "@syncfusion/ej2-react-progressbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProgressBar } from "react-bootstrap";
import "../../css/Master/master.css";



export default function Master() {
  const { auth, setAuth } = useAuth();
  console.log("++++++++++++++++++++");
  console.log(auth);
  console.log("++++++++++++++++++++++++++");
  const handleC = () => {
    setAuth({
      user: "Kej",
      pwd: "89",
    });
  };
  function Logged({ user, comp }) {
    if (user === "Ritesh") {
      return (
        <>
          Master
          <button onClick={handleC}>C</button>
         
          <progress value={0.75} />
          <ProgressBar
            now={60}
            label={`${60}%`}
            variant="rits-aw"
            animated
            style={{
              height: "10px",
            }}
          />
          {comp}
        </>
      );
    } else {
      return <h2>Access Denied {user}</h2>;
    }
  }
  return <Logged user={auth.user} comp={<Outlet />} />;
}
