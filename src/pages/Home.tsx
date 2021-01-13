import { IonAvatar, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { chevronForward, ellipsisHorizontal, menu } from 'ionicons/icons';
import './Home.css';
import { USER_DATA } from "../services/userStream";

const Home: React.FC = () => {
  const [userlist, setUserList] = useState<any[]>(USER_DATA);
  useEffect(() => {
    // commented out because of cross origin error
    // initiateSocket();
    // subscribeToStream((err: any, data: any) => {
    //   if (err) return;
    //   setUserList(oldChats => [data, ...oldChats])
    // });
  });
  return (
    <IonPage>
      <IonHeader class="header">
        <IonToolbar>
          <IonTitle class="toolbartitle">Profiles</IonTitle>
          <IonButtons slot="primary">
            <IonButton class="menubtn" size="large">
              <IonIcon slot="icon-only" icon={menu} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {userlist.map(user =>
          (<IonItem class="listitem" lines="none" button href="/profile" key={user.login.uuid}>
            <IonAvatar slot="start">
              <img src={user.picture.medium} />
            </IonAvatar>
            <IonButton slot="end" fill="clear" class="detail-button">
              <IonIcon slot="icon-only" icon={chevronForward} />
            </IonButton>
            <IonLabel class="listlabel" >{user.name.first}, {user.dob.age}</IonLabel>
          </IonItem>)
          )}

          <IonItem class="listitem item-last" lines="none">
            <IonLabel>
              <IonIcon slot="icon-only" icon={ellipsisHorizontal} color="6374f3" />
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
