import { FC } from "react";
import { SideEffectsType } from "./index";
type PharmacyInfProps = {
  medicationPrice: number;
  manufacturer: string;
  sideEffects: Array<SideEffectsType>;
};

const PharmacyInf: FC<PharmacyInfProps> = ({
  medicationPrice,
  manufacturer,
  sideEffects,
}) => {
  return (
    <div className="phamancy-body__item phamancy-body__effects">
      <h3>Цена: {medicationPrice}</h3>
      <h3>Производитель: {manufacturer}</h3>
      <h4>Побочные эффекты</h4>
      <ul>
        {sideEffects.map((sideElement) => (
          <li key={sideElement.name}>{sideElement.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PharmacyInf;
