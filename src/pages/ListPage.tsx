import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import useBoatStore from "../stores/boatStore";
import dayjs from "dayjs";
const ListPage: React.FC = () => {
  const boats = useBoatStore((state) => state.boatList);
  const startTime = useBoatStore((state) => state.startTime);
  const endTime = useBoatStore((state) => state.endTime);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Boat List</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonList>
          {boats.map((boat: any, index: number) => (
            <div hidden={!boat.visible}>
              <IonItem key={boat.id} color={boat.refBoat ? "primary" : ""}>
                <IonLabel slot="start">{boat.boatName}</IonLabel>{" "}
                <IonLabel slot="end">{boat.boatPY}</IonLabel>
              </IonItem>
            </div>
          ))}
        </IonList>
        <label>Start {startTime.format("HH:mm:ss")}</label>
        <div>End {endTime.format("HH:mm:ss")}</div>
        <div>Seconds Diff: {endTime.diff(startTime, "s")}</div>
      </IonContent>
    </IonPage>
  );
};

export default ListPage;
