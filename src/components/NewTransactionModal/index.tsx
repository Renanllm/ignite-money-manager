import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { api } from '../../services/api';
import { TransactionTypeEnum } from '../../shared/enums/transaction-type.enum';

import { ContainerForm, TransactionTypeContainer, RadioBox } from './styles';

interface IModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: IModalProps) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState(TransactionTypeEnum.DEPOSIT);

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const transaction = {
      title,
      amount,
      category,
      type
    };

    api.post('/transactions', transaction)
      .then(response => {
        console.log(response);
        onRequestClose();
      })
      .catch(error => console.error(error))
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <ContainerForm onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar nova transação</h2>

        <input
          placeholder="Título"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType(TransactionTypeEnum.DEPOSIT)}
            isActive={type === TransactionTypeEnum.DEPOSIT}
            activeColor="green"
          >
            <img src={incomeImg} alt="Botão de entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setType(TransactionTypeEnum.WITHDRAW)}
            isActive={type === TransactionTypeEnum.WITHDRAW}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Botão de saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </ContainerForm>
    </Modal>
  );
}