import { FC } from "react";
import { MedicationsType } from "../../types/store";
type PhamancyMedicationsType = {
  medications: Array<MedicationsType>;
  loadMedicametionInfo: (medName: string) => void;
};

const PhamancyMedications: FC<PhamancyMedicationsType> = ({
  medications,
  loadMedicametionInfo,
}) => {
  return (
    <div className="phamancy-body__item phamancy-medication phamancy-body__medication">
      <h3>Препараты</h3>
      <ul className="phamancy-medication__list">
        {medications.map((medItem) => (
          <li key={medItem.name} className="phamancy-medication__item">
            <p className="phamancy-medication__title">
              {medItem.name} Форма выпуска {medItem.form}
            </p>
            <img
              className="phamancy-medication__img"
              src={medItem.img}
              alt=""
            />
            <button
              onClick={() => loadMedicametionInfo(medItem.name)}
              className="phamancy-medication__btn"
            >
              Узнать больше информации
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhamancyMedications
