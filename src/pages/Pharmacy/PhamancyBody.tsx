import { FC } from "react";
import { MedicationsType, SideEffectsType } from "../../types/store";
import PhamancyMedications from "./PhamancyMedications";
import PharmacyInf from "./PharmacyInf";
type PhamancyBodyProps = {
  medication: Array<MedicationsType>;
  sideEffects: Array<SideEffectsType>;
  loadMedicametionInfo: (medName: string) => void;
  medicationPrice: number;
  manufacturer: string;
};

const PhamancyBody: FC<PhamancyBodyProps> = ({
  manufacturer,
  medicationPrice,
  medication,
  sideEffects,
  loadMedicametionInfo,
}) => {
  if (medication.length == 0) {
    return <h3>Данных нет</h3>;
  }

  return (
    <div className="phamancy-body">
      <PhamancyMedications
        loadMedicametionInfo={loadMedicametionInfo}
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
