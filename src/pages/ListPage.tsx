import {
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import useBoatStore from "../stores/boatStore";
import dayjs from "dayjs";
import { timestamp } from "../../node_modules/rxjs/src/internal/operators/timestamp";
const ListPage: React.FC = () => {
  const boats = useBoatStore((state) => state.boatList);
  const startTime = useBoatStore((state) => state.startTime);
  const endTime = useBoatStore((state) => state.endTime);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Relative Times - 2 </IonTitle>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonList>
          {boats.map((boat: any, index: number) => (
            <div hidden={!boat.visible} key={boat.id}>
              <IonItem key={boat.id} color={boat.refBoat ? "primary" : ""}>
                <IonGrid>
                  <IonRow>
                    <IonCol size="3">
                      <IonLabel>{boat.boatName}</IonLabel>
                    </IonCol>
                    <IonCol size="3" offset="6">
                      <IonLabel>{boat.boatPY}</IonLabel>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
            </div>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default ListPage;
