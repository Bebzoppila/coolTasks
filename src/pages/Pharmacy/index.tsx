import { FC, useState } from "react";
import "./style.sass";
import { useAppSelector } from "../../hooks/redux";
import CustomSelect from "../CustomSelect";
import PhamancyBody from "./PhamancyBody";
import { getMedInfoFromPhamancy, getInfoSideEffects } from "./api";

export type MedicationType = {
  form: string;
  img: string;
  name: string;
};

export type SideEffectsType = {
  name: string;
};
type MedicalItemType = {
  manufacturer: string;
  price: number;
  sideeffects: Array<SideEffectsType>;
};

const Phamancy: FC = () => {
  const phamancy = useAppSelector((store) => store.pharmacy.phamancy);
  const [phamancyActive, setPhamancyActive] = useState<string>("");

  const [activeMedications, setActiveMedications] = useState<
    Array<MedicationType>
  >([]);
  const [medicationInf, setMedicationInf] = useState<MedicalItemType>({
    manufacturer: "",
    price: 0,
    sideeffects: [],
  });

  const updatePhamancyActive = (newPhamancy: string) => {
    setPhamancyActive(newPhamancy);
  };

  const updateActiveMedications = async () => {
    let phamancyMed: Array<MedicationType> = await getMedInfoFromPhamancy(
      phamancyActive
    );
    setActiveMedications([...phamancyMed]);
    setMedicationInf({ manufacturer: "", price: 0, sideeffects: [] });
  };

  const loadMedicationInfo = async (medName: string) => {
    let medicationInfo: MedicalItemType = await getInfoSideEffects(medName);
    setMedicationInf(medicationInfo);
  };

  return (
    <div className="phamancy">
      <div className="container">
        <div className="phamancy__inner">
          <h2 className="phamancy__title">
            Выберите болезнь для получения дополнительной информации
          </h2>
          <CustomSelect
            updateSelect={updatePhamancyActive}
            activSelect={phamancyActive}
            option={phamancy.map((ph) => ph.name)}
          />
          <button onClick={updateActiveMedications} className="phamancy__btn">
            Запросить даныне
          </button>
          <PhamancyBody
            loadSideEffectsInfo={loadMedicationInfo}
            sideEffects={medicationInf.sideeffects}
            medication={activeMedications}
            medicationPrice={medicationInf.price}
            manufacturer={medicationInf.manufacturer}
          />
        </div>
      </div>
    </div>
  );
};

export default Phamancy;
