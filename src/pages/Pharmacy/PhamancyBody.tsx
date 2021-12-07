import { FC } from "react";
import { MedicationType, SideEffectsType } from "./index";

type PhamancyBodyProps = {
  medication: Array<MedicationType>;
  sideEffects: Array<SideEffectsType>;
  loadSideEffectsInfo: (medName:string) => void
};

const PhamancyBody: FC<PhamancyBodyProps> = ({ medication, sideEffects, loadSideEffectsInfo }) => {
  if (medication.length == 0) {
    return <h3>Данных нет</h3>;
  }

  return (
    <div className="phamancy-body">
      <div className="phamancy-body__item phamancy-medication phamancy-body__medication">
        <h3>Препараты</h3>
        <ul className="phamancy-medication__list">
          {medication.map((medItem) => (
            <li key={medItem.name} className="phamancy-medication__item">
              <p className="phamancy-medication__title">
                {medItem.name} Форма выпуска {medItem.form}
              </p>
              <img
                className="phamancy-medication__img"
                src={medItem.img}
                alt=""
              />
              <button onClick={() => loadSideEffectsInfo(medItem.name)} className="phamancy-medication__btn">
                Узнать больше информации
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="phamancy-body__item phamancy-body__effects">
        <h3>Побочные эффекты</h3>
        <ul>
          {sideEffects.map((sideElement) => (
            <li key={sideElement.name}>{sideElement.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PhamancyBody;
