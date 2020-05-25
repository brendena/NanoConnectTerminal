import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon } from '@ionic/react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
import { useSelector, useDispatch } from 'react-redux'
import SelectTransaction from '../components/SelectTransaction';
import XtermJS from '../components/XtermJS';
import './HomePage.css';
import nanoLogo from '../images/Nano_Logo.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";



const HomePage: React.FC = () => {
  const dispatch = useDispatch()


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
          <img src={nanoLogo} alt="Nano's logo" height="50px" />
          <a href="https://github.com/brendena/NanoConnectTerminal">
            <button id="githubButton">
              <FontAwesomeIcon icon={faGithub} />
            </button>
          </a>
        </IonToolbar>
      </IonHeader>
      <IonContent>

        <XtermJS />

      </IonContent>
    </IonPage>
  );
};

export default HomePage;
