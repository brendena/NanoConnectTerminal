import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon } from '@ionic/react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
import './SelectTransaction.css';

interface SelectTransactionProps {
    walletAddress: string;
}

const SelectTransaction: React.FC<SelectTransactionProps> = ({ walletAddress }) => {
  return (
    <IonCard className="SelectTransactionContainer">
        <div className="center">
          Balance
        </div>
        <div className="center">
          35 Nano
        </div>
        <div className="center walletAddress">
          {walletAddress}
        </div>
        <IonButton routerLink={"/SendPage/" + walletAddress} className="transactionButtons">send</IonButton>
        <IonButton routerLink={"/ReceivePage/" + walletAddress} className="transactionButtons">receive</IonButton>
        <IonButton className="transactionButtons">history</IonButton>
    </IonCard>

  );
};

export default SelectTransaction;
