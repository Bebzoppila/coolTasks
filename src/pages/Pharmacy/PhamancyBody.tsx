import { FC } from "react";
import { MedicationType, SideEffectsType } from "./index";
import PhamancyMedications from "./PhamancyMedications";
import PharmacyInf from "./PharmacyInf";
type PhamancyBodyProps = {
  medication: Array<MedicationType>;
  sideEffects: Array<SideEffectsType>;
  loadSideEffectsInfo: (medName: string) => void;
  medicationPrice: number;
  manufacturer: string;
};

const PhamancyBody: FC<PhamancyBodyProps> = ({
  manufacturer,
  medicationPrice,
  medication,
  sideEffects,
  loadSideEffectsInfo,
}) => {
  if (medication.length == 0) {
    return <h3>Данных нет</h3>;
  }

  return (
    <div className="phamancy-body">
      <PhamancyMedications
        loadSideEffectsInfo={loadSideEffectsInfo}
        medications={medication}
      />
      <PharmacyInf
        sideEffects={sideEffects}
        manufacturer={manufacturer}
        medicationPrice={medicationPrice}
      />
    </div>
  );
};

export default PhamancyBody;
