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
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonList>
          {boats.map((boat: any, index: number) => (
            <IonItem key={boat.id} color={boat.refBoat ? "primary" : ""}>
              <IonLabel slot="start">{boat.boatName}</IonLabel>{" "}
              <IonLabel slot="end">{boat.boatPY}</IonLabel>
              <IonCheckbox
                checked={boat.visible}
                onClick={(e) => toggleVisibility(boat.id)}
              >
                Visible
              </IonCheckbox>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
