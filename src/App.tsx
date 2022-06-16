import Modal from 'react-modal';
import { Header } from './components/Header';
import { Dashboard } from "./components/Dashboard";
import { useState } from "react";

import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './TransactionContext';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal onRequestClose={handleCloseNewTransactionModal} isOpen={isNewTransactionModalOpen} />
      <GlobalStyle />
    </TransactionsProvider>
  );
}