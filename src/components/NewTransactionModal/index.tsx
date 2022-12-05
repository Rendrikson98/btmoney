import Modal from 'react-modal';
import { Container, RadioBox, TransactionTypeContainer } from './styles';
import CloseImg from '../../assets/fechar.svg';
import incomeImg from '../../assets/entradas.svg';
import outcomeImg from '../../assets/saidas.svg';
import { useState } from 'react';
import { useTransaction } from '../../hooks/TransactionsContext.';

type NewTransactionModalProps = {
  isOpen: boolean;
  onCloseNewTransactionModal: () => void;
};

export function NewTransactionModal({
  isOpen,
  onCloseNewTransactionModal,
}: NewTransactionModalProps) {
  const { createTransaction } = useTransaction();

  const [type, setType] = useState<string>('deposit');
  const [title, setTitle] = useState<string>('');
  const [value, setValue] = useState<number>(0);
  const [category, setCategory] = useState<string>('');

  async function handleCreateNewTransaction(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    await createTransaction({
      title,
      amount: value,
      category,
      type,
    });

    setTitle('');
    setValue(0);
    setCategory('');
    setType('deposit');
    onCloseNewTransactionModal();
  }

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
      <Container onSubmit={(event) => handleCreateNewTransaction(event)}>
        <h2>Cadastrar Transação</h2>
        <input
          placeholder="Título"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={(event) => {
            setValue(Number(event.target.value));
          }}
        />
        <TransactionTypeContainer>
          <RadioBox
            type="button"
            isActive={type === 'deposit'}
            activeColor="green"
            onClick={() => setType('deposit')}
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            isActive={type === 'withdraw'}
            activeColor="red"
            onClick={() => setType('withdraw')}
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input
          placeholder="Categoria"
          value={category}
          onChange={(event) => {
            setCategory(event.target.value);
          }}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
