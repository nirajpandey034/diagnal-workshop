import React, { useState } from "react";
import CardContainer from "./Card/CardContainer";
import Appbar from "./Appbar/Appbar";
import "../App.css";

export default function Dashboard() {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="dashboard-container">
      <Appbar setSearchText={setSearchText} />
      <CardContainer searchText={searchText} />
    </div>
  );
}
