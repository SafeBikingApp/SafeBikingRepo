import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import useSwr from "swr";
import useSupercluster from "use-supercluster";
import "./CSS/Map.css";
import GoogleMapReact from "google-map-react";
import CardIssue from "./CardIssue";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

const Marker = ({ children }) => children;

const Map = (props) => {
  // 1) map setup
  const mapRef = useRef();
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

  const [bounds, setBounds] = useState(null);
  // 2) load and format data
  const url = "/api/issues";
  const { data, error } = useSwr(url, fetcher);
  const issues = data && !error ? data : [];
  const points = issues.map((issue) => ({
    type: "Feature",
    properties: {
      cluster: false,
      issueId: issue._id,
      category: issue.type,
      voteUp: issue.upVotes.length,
      voteDown: issue.downVotes.length
    },
    geometry: {
      type: "Point",
      coordinates: [
        parseFloat(issue.coordinates.long),
        parseFloat(issue.coordinates.lat),
      ],
    },
  }));
  // 3) get clasters
  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom,
    options: { radius: 50, maxZoom: 20 },
  });
  // 4) render map

  const [center, setCenter] = useState({ lat: 52.52, lng: 13.405 });

  function _onClick(obj) {
    console.log(obj.x, obj.y, obj.lat, obj.lng, obj.event);
  }


  return (
    <div style={{ height: "83vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_API_KEY,
          language: "de",
          region: "de",
        }}
        defaultCenter={center}
        defaultZoom={zoom}
        onClick={_onClick}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map }) => {
          mapRef.current = map;
        }}
        onChange={({ zoom, bounds }) => {
          setZoom(zoom);
          setBounds([
            bounds.nw.lng,
            bounds.se.lat,
            bounds.se.lng,
            bounds.nw.lat,
          ]);
        }}
      >
        {clusters.map((cluster) => {
          const [longitude, latitude] = cluster.geometry.coordinates;
          const { cluster: isCluster, point_count: pointCount } =
            cluster.properties;

          if (isCluster) {
            return (
              <Marker key={cluster.id} lat={latitude} lng={longitude}>
                <div
                  className="cluster-marker"
                  style={{
                    width: `${10 + (pointCount / points.length) * 40}px`,
                    height: `${10 + (pointCount / points.length) * 40}px`,
                  }}
                  onClick={() => {
                    const expansionZoom = Math.min(
                      supercluster.getClusterExpansionZoom(cluster.id),
                      20
                    );
                    mapRef.current.setZoom(expansionZoom);
                    mapRef.current.panTo({ lat: latitude, lng: longitude });
                  }}
                >
                  {pointCount}
                </div>
              </Marker>
            );
          }

          return (

            <CardIssue
              lat={marker.lat}
              lng={marker.lng}
              text={marker.message}
              issue_id={marker._id}
            />

            <Marker
              key={cluster.properties.issueId}
              lat={latitude}
              lng={longitude}
            >
              <button className={cluster.properties.voteUp > cluster.properties.voteDown ? 'issue-marker-more-up':'issue-marker-more-down'} >
                <img src='./img/logo.png' alt='issue'/>
              </button>
              {/* <CardIssue issue_id={cluster.properties.issueId} title={cluster.properties.category}>
              </CardIssue> */}
            </Marker>

          );
        })}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
