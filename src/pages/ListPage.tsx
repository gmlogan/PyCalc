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

const ListPage: React.FC = () => {
  const boats = useBoatStore((state) => state.boatList);
  const secondsDiff = useBoatStore((state) => state.secondsDiff);

  console.count();
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
            <IonItem
              key={boat.id}
              hidden={!boat.visible}
              color={boat.refBoat ? "primary" : ""}
            >
              <IonLabel slot="start">{boat.boatName}</IonLabel>{" "}
              <IonLabel slot="end">{boat.boatPY}</IonLabel>
            </IonItem>
          ))}
        </IonList>
        <label>Seconds Diff {secondsDiff}</label>
      </IonContent>
    </IonPage>
  );
};

export default ListPage;
