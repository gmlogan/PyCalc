import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonContent,
  IonMenuButton,
} from "@ionic/react";
import React from "react";
import ListPage from "./ListPage";
import dayjs from "dayjs";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>MyPyCalc </IonTitle>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ListPage />
      </IonContent>
    </IonPage>
  );
};

export default Home;
