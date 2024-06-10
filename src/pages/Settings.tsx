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
  IonCol,
  IonRow,
  IonGrid,
} from "@ionic/react";
import React from "react";
import useBoatStore from "../stores/boatStore";
import dayjs from "dayjs";
import "./Settings.css";
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

      <IonContent>
        <IonList>
          <IonItem className={"color:red"}>
            <IonGrid>
              <IonRow>
                <IonCol size="4">
                  <IonLabel>Class</IonLabel>
                </IonCol>
                <IonCol size="4">
                  <IonLabel>PY</IonLabel>
                </IonCol>
                <IonCol size="4">
                  <IonLabel>Visibiity</IonLabel>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>

          {boats.map((boat: any, index: number) => (
            <IonItem key={boat.id} color={boat.refBoat ? "primary" : ""}>
              <IonGrid className="padding:0">
                <IonRow>
                  <IonCol size="4">
                    <IonLabel>{boat.boatName}</IonLabel>
                  </IonCol>
                  <IonCol size="4">
                    <IonLabel>{boat.boatPY}</IonLabel>
                  </IonCol>
                  <IonCol size="3" offset="1">
                    <IonCheckbox
                      checked={boat.visible}
                      onClick={(e) => toggleVisibility(boat.id)}
                    ></IonCheckbox>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
          ))}
          {boats.map((boat: any, index: number) => (
            <IonItem key={boat.id} color={boat.refBoat ? "primary" : ""}>
              <IonGrid className="padding:0">
                <IonRow>
                  <IonCol size="4">
                    <IonLabel>{boat.boatName}</IonLabel>
                  </IonCol>
                  <IonCol size="4">
                    <IonLabel>{boat.boatPY}</IonLabel>
                  </IonCol>
                  <IonCol size="3" offset="1">
                    <IonCheckbox
                      checked={boat.visible}
                      onClick={(e) => toggleVisibility(boat.id)}
                    ></IonCheckbox>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
          ))}
          {boats.map((boat: any, index: number) => (
            <IonItem key={boat.id} color={boat.refBoat ? "primary" : ""}>
              <IonGrid className="padding:0">
                <IonRow>
                  <IonCol size="4">
                    <IonLabel>{boat.boatName}</IonLabel>
                  </IonCol>
                  <IonCol size="4">
                    <IonLabel>{boat.boatPY}</IonLabel>
                  </IonCol>
                  <IonCol size="3" offset="1">
                    <IonCheckbox
                      checked={boat.visible}
                      onClick={(e) => toggleVisibility(boat.id)}
                    ></IonCheckbox>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
          ))}
          {boats.map((boat: any, index: number) => (
            <IonItem key={boat.id} color={boat.refBoat ? "primary" : ""}>
              <IonGrid className="padding:0">
                <IonRow>
                  <IonCol size="4">
                    <IonLabel>{boat.boatName}</IonLabel>
                  </IonCol>
                  <IonCol size="4">
                    <IonLabel>{boat.boatPY}</IonLabel>
                  </IonCol>
                  <IonCol size="3" offset="1">
                    <IonCheckbox
                      checked={boat.visible}
                      onClick={(e) => toggleVisibility(boat.id)}
                    ></IonCheckbox>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
