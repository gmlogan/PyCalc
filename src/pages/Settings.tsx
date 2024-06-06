import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCheckbox,
  IonButtons,
  IonMenuButton,
  IonListHeader,
} from "@ionic/react";
import React from "react";
import useBoatStore from "../stores/boatStore";
import dayjs from "dayjs";
const Settings: React.FC = () => {
  const boats = useBoatStore((state) => state.boatList);
  const toggleVisibility = useBoatStore((state) => state.toggleVisibility);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Update Boats</IonTitle>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonList>
          <IonListHeader>
            <IonLabel>Name</IonLabel>
            <IonLabel>Visibility</IonLabel>
            <IonLabel>PY</IonLabel>
          </IonListHeader>
          {boats.map((boat: any, index: number) => (
            <IonItem key={boat.id} color={boat.refBoat ? "primary" : ""}>
              <IonLabel>{boat.boatName}</IonLabel>{" "}
              <IonLabel>{boat.boatPY}</IonLabel>
              <IonCheckbox
                checked={boat.visible}
                onClick={(e) => toggleVisibility(boat.id)}
              ></IonCheckbox>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
