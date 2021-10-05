import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CSS/Map.css";
import GoogleMapReact from "google-map-react";
import CardIssue from "./CardIssue";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = (props) => {
  const [center, setCenter] = useState({ lat: 52.52, lng: 13.405 });
  const [zoom, setZoom] = useState(13);
  const issuesObj = [
    {
      lat: 52.506157052166536,
      lng: 13.42598379465045,
      message: "Road works",
      _id: "615c9cedad39f1f1c386e959"
    },
    {
      lat: 52.506682758669584,
      lng: 13.424079419446123,
      message: "Pay for road",
      _id: "615c9cedad39f1f1c386e959"
    },
    {
      lat: 52.50661416254137,
      lng: 13.42686893870312,
      message: "Dance to road",
      _id: "615c9cedad39f1f1c386e959"
    },
    {
      lat: 52.506163595025654,
      lng: 13.424685598119888,
      message: "Go away",
      _id: "615c9cedad39f1f1c386e959"
    },
  ];

  return (
    <div style={{ height: "83vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_API_KEY,
          language: "de",
          region: "de",
        }}
        defaultCenter={center}
        defaultZoom={zoom}>
        {issuesObj.map((marker) => {
          return (
            <CardIssue
              lat={marker.lat}
              lng={marker.lng}
              text={marker.message}
              issue_id={marker._id}
            />
          );
        })}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
