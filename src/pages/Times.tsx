import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonDatetime,
  IonItem,
  IonLabel,
  IonPicker,
  IonPickerColumn,
  IonPickerColumnOption,
  IonButton,
} from "@ionic/react";

import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import TimePicker from "../components/TimePicker";

import useBoatStore from "../stores/boatStore";

function TimesPage() {
  const setStartTime = useBoatStore((state) => state.setStartTime);

  const setEndTime = useBoatStore((state) => state.setEndTime);

  const handleStart = (v: Dayjs) => {
    setStartTime(v);
  };
  const handleEnd = (v: Dayjs) => {
    setEndTime(v);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Time settings - Zustand</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonLabel>
          <h1>Start Time</h1>
        </IonLabel>
        <TimePicker handler={handleStart} />
        <TimePicker handler={handleEnd} />
      </IonContent>
    </IonPage>
  );
}

export default TimesPage;
