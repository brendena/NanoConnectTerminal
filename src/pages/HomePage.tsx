import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon } from '@ionic/react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
import { useSelector, useDispatch } from 'react-redux'
import SelectTransaction from '../components/SelectTransaction';
import XtermJS from '../components/XtermJS';
import './HomePage.css';
import nanoLogo from '../images/Nano_Logo.svg';



const HomePage: React.FC = () => {

  
  const counter = useSelector( (state:any) => state.propsPage.counter);
  
  console.log(counter);
  const dispatch = useDispatch()


  /*
  <IonButton color="primary" onClick={() => { dispatch({ type: "INCREASE_COUNTER" })}}>Primady { counter }</IonButton>
  <IonButton routerLink="/tab2">got to tab2 </IonButton>
  */


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
            <img src={nanoLogo} alt="Nano's logo" height="50px"/>
 
        </IonToolbar>
      </IonHeader>
      <IonContent>
        
        <XtermJS/>

      </IonContent>
    </IonPage>
  );
};

export default HomePage;
