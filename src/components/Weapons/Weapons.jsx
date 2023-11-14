import { getWeapons } from "../../utils/api";
import { useState, useEffect } from "react";

export default function Weapons(props) {
  const [weapons, setWeapons] = useState([]);

  useEffect(() => {
    getWeapons().then((data) => {
      setWeapons(data.data);
    });
  }, []);

  return (
    <div className="weapons">
      {weapons.map((weapon) => (
        <div className="weapons__container" key={weapon.uuid}>
          <p className="weapons__name" key={weapon.displayName}>{weapon.displayName}.</p>
          <img className="weapons__image" key={weapon.displayIcon} src={weapon.displayIcon} alt="weapon" />
          <p className="weapons__category"  key={weapon.category}>{weapon.category.split('EEquippableCategory::').pop()}</p>
        </div>
      ))}
    </div>
  );
}
