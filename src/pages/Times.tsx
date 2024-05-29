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

import dayjs from "dayjs";
import { useState } from "react";
import TimePicker from "../components/TimePicker";

import useBoatStore from "../stores/boatStore";

//looked ok "react-date-time-picker-tz";

function TimesPage() {
  const [startSeconds, setStartSeconds] = useState(0);
  const [endSeconds, setEndSeconds] = useState(0);
  const [secsDiff, setSecsDiff] = useState(0);

  const setSecondsDiff = useBoatStore((state) => state.setSecondsDiff);
  const secondsDiff = useBoatStore((state) => state.secondsDiff);

  const handleStart = (v: number) => {
    setStartSeconds(v);
    setSecondsDiff(endSeconds - startSeconds);
  };
  const handleEnd = (v: number) => {
    setEndSeconds(v);
    setSecondsDiff(endSeconds - startSeconds);
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

        <IonLabel>
          Diff: {secsDiff}: {secondsDiff}
        </IonLabel>
      </IonContent>
    </IonPage>
  );
}

export default TimesPage;
