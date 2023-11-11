import { useState, useEffect } from "react";
import { getMaps } from "../../utils/api";

export default function Maps(props) {
  const [maps, setMaps] = useState([]);

  useEffect(() => {
    getMaps().then((data) => {
      setMaps(data.data);
    });
  }, []);

  return (
    <>
      <div className="maps">
        <div className="maps__container">
          <h2 className="maps__title">MAPS</h2>
          {maps.map((map) => (
            <div className="maps__content" key={map.mapUrl}>
              <div className="maps__selection" key={map.uuid}>
                <p className="maps__name" key={map.displayName}>
                  {map.displayName}
                </p>
              </div>
              <img
                className="maps__icon"
                key={map.splash}
                src={map.splash}
                alt="map"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
