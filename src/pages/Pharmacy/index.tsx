import { FC, useState } from "react";
import "./style.sass";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import CustomSelect from "../CustomSelect";
import PhamancyBody from "./PhamancyBody";
import { DiseasesItemType } from "../../types/store"
import { fetchMedicametions, fetchMedicametionInfo } from "../../store/slices/PharmacySlice"

const Phamancy: FC = () => {
  const {diseases, activeMedicametions, medicationInf} = useAppSelector((store) => store.pharmacy);
  const dispacher = useAppDispatch()

  const [diseasesActive, setDiseasesActive] = useState<string>(diseases[0]?.name)

  const updateActiveDiseases = (newDiseases:string) => {
    setDiseasesActive(newDiseases)
  }

  const loadMedicametions = () => {
    dispacher(fetchMedicametions(diseasesActive))
  }

  const loadMedicametionInfo = (medName:string) => {
    dispacher(fetchMedicametionInfo(medName))
  }
  console.log(medicationInf);
  return (
    <div className="phamancy">
      <div className="container">
        <div className="phamancy__inner">
          <h2 className="phamancy__title">
            Выберите болезнь для получения дополнительной информации
          </h2>
          <CustomSelect
            updateSelect={updateActiveDiseases}
            activSelect={diseasesActive}
            option={diseases.map((ph) => ph.name)}
          />
          <button onClick={loadMedicametions} className="phamancy__btn">
            Запросить даныне
          </button>
          <PhamancyBody
            loadMedicametionInfo={loadMedicametionInfo}
            sideEffects={medicationInf.sideeffects}
            medication={activeMedicametions}
            medicationPrice={medicationInf.price}
            manufacturer={medicationInf.manufacturer}
          />
        </div>
      </div>
    </div>
  );
};

export default Phamancy;
