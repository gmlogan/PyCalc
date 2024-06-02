import {
  IonButton,
  IonContent,
  IonLabel,
  IonPicker,
  IonPickerColumn,
  IonPickerColumnOption,
} from "@ionic/react";
import React from "react";
import { useState, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";

interface Props {
  handler: (value: Dayjs) => void;
}

const TimePicker: React.FC<Props> = ({ handler }) => {
  const Hours = Array.from(Array(24).keys());
  const Minutes = Array.from(Array(60).keys());
  const Seconds = Array.from(Array(60).keys());
  const [hours, setHours] = useState<any>(dayjs().hour());
  const [minutes, setMinutes] = useState<any>(dayjs().minute());
  const [seconds, setSeconds] = useState<any>(dayjs().second());

  useEffect(() => {
    handler(dayjs().set("h", hours).set("m", minutes).set("s", seconds));
  }, [hours, minutes, seconds]);

  return (
    <IonPicker color="blue">
      <IonPickerColumn
        value={hours}
        onIonChange={({ detail }) => {
          setHours(detail.value);
        }}
      >
        {Hours.map((hour, index) => (
          <IonPickerColumnOption value={hour} key={index}>
            {hour}
          </IonPickerColumnOption>
        ))}
      </IonPickerColumn>
      <IonPickerColumn
        value={minutes}
        onIonChange={({ detail }) => {
          setMinutes(detail.value);
        }}
      >
        {Minutes.map((m, index) => (
          <IonPickerColumnOption value={m} key={index}>
            {m}
          </IonPickerColumnOption>
        ))}
      </IonPickerColumn>
      <IonPickerColumn
        value={seconds}
        onIonChange={({ detail }) => {
          setSeconds(detail.value);
        }}
      >
        {Seconds.map((s, index) => (
          <IonPickerColumnOption value={s} key={index}>
            {s}
          </IonPickerColumnOption>
        ))}
      </IonPickerColumn>
    </IonPicker>
  );
};

export default TimePicker;
