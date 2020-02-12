import React from "react";
import "./App.css";
import planeImg from "./images/Plane2.jpg";
import NavigationBar from "./components/NavigationBar";
import DataTable from "./components/DataTable";
import FlightSearch from "./components/FlightSearch";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${planeImg})`,
        resize: "both",
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* # Navigation Bar Component */}
      <div id="home-component">
        <NavigationBar />
      </div>

      {/* # Data Table Component */}
      <div
        id="data-table-component"
        style={{
          position: "absolute",
          left: "50%",
          top: "30%",
          transform: "translate(-50%, -50%)"
        }}
      >
        <DataTable />
      </div>

      {/* # Flight Search Component */}
      <div
        id="flight-search-component"
        style={{
          position: "absolute",
          left: "50%",
          top: "30%",
          transform: "translate(-50%, -50%)",
          paddingTop: "250px"
        }}
      >
        <FlightSearch />
      </div>
    </div>
  );
}

export default App;
