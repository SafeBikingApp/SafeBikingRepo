import React, { useState, useRef, useContext } from "react";
import Context from "../contexts/ContextApi";
import { Link } from "react-router-dom";
import useSwr from "swr";
import useSupercluster from "use-supercluster";
import "./CSS/Map.css";
import GoogleMapReact from "google-map-react";
import CardIssue from "./CardIssue";


const fetcher = (...args) => fetch(...args).then((response) => response.json());

const Marker = ({ children }) => children;

const Map = (props) => {
  
  const { long, setLong, lat, setLat, issueId, setIssueId } = useContext(Context);
  
  // 1) map setup
  const mapRef = useRef();
  const [zoom, setZoom] = useState(13);
  const [bounds, setBounds] = useState(null);
  // 2) load and format data
  const url = "/api/issues";
  const { data, error } = useSwr(url, fetcher);
  const issues = data && !error ? data : [];
  const [showicon, setShowIcon] = useState(true);
  const points = issues.map((issue) => ({
    type: "Feature",
    properties: {
      cluster: false,
      issueId: issue._id,
      category: issue.type,
      voteUp: issue.upVotes.length,
      voteDown: issue.downVotes.length,
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
    options: { radius: 75, maxZoom: 20 },
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
        }}>
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
                  }}>
                  {pointCount}
                </div>
              </Marker>
            );
          }

          return (
            <Marker
              key={cluster.properties.issueId}
              lat={latitude}
              lng={longitude}>
              {showicon ? (
                <button
                  className={
                    cluster.properties.voteUp > cluster.properties.voteDown
                      ? "issue-marker-more-up"
                      : "issue-marker-more-down"
                  }
                  onClick={() => setShowIcon(false)}>
                  <img src="./img/logo.png" alt="issue" />
                </button>
              ) : (
                <CardIssue
                  issue_id={cluster.properties.issueId}
                  title={cluster.properties.category}
                  voteUp={cluster.properties.voteUp}
                  voteDown={cluster.properties.voteDown}
                  setShowIcon={setShowIcon}></CardIssue>
              )}
            </Marker>
          );
        })}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
