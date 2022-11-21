import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';
import Modal from 'react-modal';

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
    <>
      <Header OnOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onCloseNewTransactionModal={handleCloseNewTransactionModal}
      />
    </>
  );
}

export default App;
