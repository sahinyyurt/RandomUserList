import { IonAvatar, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { arrowBack, female, male } from 'ionicons/icons';
import './Profile.css';

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader class="header">
        <IonToolbar>
          <IonTitle class="toolbartitle">My Profile</IonTitle>
          <IonButtons slot="start">
            <IonButton class="menubtn" size="large">
              <IonIcon slot="icon-only" icon={arrowBack} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="profile-header">
        <IonAvatar slot="start">
              <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
          </IonAvatar>
          <div className="name-container">
            <span className="name-title">Name</span>
            <span className="name">Şahin Yeşilyurt</span>
          </div>
        </div>
        <div className="location">
          HARİTA
        </div>
        <div className="detail">
          <div className="gender">
            <span>Gender</span>
            <IonIcon slot="icon-only" icon={male} />
          </div>
          <div className="age">
            <span>Age</span>
            <div className="cubuk-buyuk">...</div>
            <div className="moralan">
              <div className="cubuk">.</div>
              <div className="cubuk">.</div>
              <div className="cubuk">.</div>
              <div className="cubuk">.</div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
