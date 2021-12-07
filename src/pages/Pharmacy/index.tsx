import { FC, useState } from "react";
import "./style.sass";
import { useAppSelector } from "../../hooks/redux";
import CustomSelect from "../CustomSelect";
import PhamancyBody from "./PhamancyBody";
import {getInfoFromPhamancy, getInfoSideEffects} from "./api";

export type MedicationType = {
  form: string;
  img: string;
  name: string;
};

export type SideEffectsType = {
  name:string,
}

type PhamancyDataType = {
  medications: Array<MedicationType> | [];
  sideEffects: Array<SideEffectsType>
};

const Phamancy: FC = () => {
  const phamancy = useAppSelector((store) => store.pharmacy.phamancy);
  const phamancyNames: Array<string> = phamancy.map((ph) => ph.name);
  const [phamancyActive, setPhamancyActive] = useState<string>(
    phamancyNames[0]
  );
  const [phamancyData, setPhamancyData] = useState<PhamancyDataType>({ medications: [], sideEffects:[] });

  const updatePhamancyActive = (newPhamancy: string) => {
    setPhamancyActive(newPhamancy);
  };

  const getInfo = async () => {
    let phamancyMed:Array<MedicationType> = await getInfoFromPhamancy(phamancyActive);
    setPhamancyData({...phamancyData, medications:[...phamancyMed], sideEffects:[]})
  };

  const loadSideEffectsInfo = async (medName: string) => {
    let sideEffectsMed:Array<SideEffectsType> = await getInfoSideEffects(medName);
    setPhamancyData({...phamancyData, sideEffects:sideEffectsMed})
  }


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
            option={phamancyNames}
          />
          <button onClick={getInfo} className="phamancy__btn">
            Запросить даныне
          </button>
          <PhamancyBody loadSideEffectsInfo={loadSideEffectsInfo} sideEffects={phamancyData.sideEffects} medication={phamancyData.medications} />
        </div>
      </div>
    </div>
  );
};

export default Phamancy;
