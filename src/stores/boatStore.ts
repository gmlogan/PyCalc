import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import React from "react";
//import data for boats

import listOfBoats from "./boatList";

//define the structure of the boattyoe that will for the boat list
interface boatType {
  id: string;
  boatName: string;
  boatPY: number;
  visible: boolean;
  finishTime: string;
  refBoat: boolean;
}
//create an array of objects each of which are of type boatType

type BoatState = {
  boatList: Array<boatType>;
  secondsDiff: number;
  setSecondsDiff: (s: number) => void;
};

const useBoatStore = create<BoatState>((set) => ({
  boatList: listOfBoats,
  secondsDiff: 0,
  setSecondsDiff: (s) =>
    set(() => ({
      secondsDiff: s,
    })),
}));
export default useBoatStore;
