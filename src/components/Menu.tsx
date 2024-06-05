import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonMenuToggle,
  IonItem,
  IonLabel,
} from "@ionic/react";
import React from "react";

const Menu: React.FC = () => (
  <IonMenu side="start" contentId="main">
    <IonHeader>
      <IonToolbar color="light">
        <IonTitle>MENU</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonList>
        <IonMenuToggle auto-hide="false">
          <IonItem button routerLink={"/home"} routerDirection="none">
            <IonLabel>Home</IonLabel>
          </IonItem>
        </IonMenuToggle>
        <IonMenuToggle auto-hide="false">
          <IonItem button routerLink={"/times"} routerDirection="none">
            <IonLabel>Times</IonLabel>
          </IonItem>
          <IonItem button routerLink={"/settings"} routerDirection="none">
            <IonLabel>Settings</IonLabel>
          </IonItem>
        </IonMenuToggle>
      </IonList>
    </IonContent>
  </IonMenu>
);

export default Menu;
