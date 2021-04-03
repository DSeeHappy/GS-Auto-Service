import React from "react";

const GoogleMap = ({ extraClass }) => {
  return (
    <div className={`google-map__${extraClass}`}>
      <iframe
        title="template google map"
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJRUbYeMCAa4cRKXgqZcOaVa4&key=AIzaSyBxrjs1NoCqtnd1vKKXe-uRdqzcaHUEyv0"        className={`map__${extraClass}`}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default GoogleMap;
