export interface TodoItemType {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface TableItemType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface DiseasesItemType {
  id:number,
  name:string,
  descriptions:string,
}

export interface MedicationsType {
  form: string;
  img: string;
  name: string;
};

export interface MedicaInfType  {
  manufacturer: string;
  price: number;
  sideeffects: Array<SideEffectsType>;
};

export interface SideEffectsType{
  name: string;
};