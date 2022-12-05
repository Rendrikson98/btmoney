import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';
import Modal from 'react-modal';
import { TransactionProvider } from './hooks/TransactionsContext.';

Modal.setAppElement('#root');

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState<boolean>(false);

  const handleOpenNewTransactionModal = (): void => {
    setIsNewTransactionModalOpen(true);
  };

  const handleCloseNewTransactionModal = (): void => {
    setIsNewTransactionModalOpen(false);
  };
  return (
    <TransactionProvider>
      <Header OnOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onCloseNewTransactionModal={handleCloseNewTransactionModal}
      />
    </TransactionProvider>
  );
}

export default App;
