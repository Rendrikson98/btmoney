import Modal from 'react-modal';
import { Container } from './styles';
import CloseImg from '../../assets/fechar.svg';

type NewTransactionModalProps = {
  isOpen: boolean;
  onCloseNewTransactionModal: () => void;
};

export function NewTransactionModal({
  isOpen,
  onCloseNewTransactionModal,
}: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseNewTransactionModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button">
        <img
          src={CloseImg}
          alt="Fechar modal"
          onClick={onCloseNewTransactionModal}
          className="react-modal-close"
        />
      </button>
      <Container>
        <h2>Cadastrar Transação</h2>
        <input placeholder="Título" />
        <input type="number" placeholder="Valor" />
        <input placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
