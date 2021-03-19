import { Container, Content } from './styles';

import logoImg from '../../assets/logo.svg';

interface IHeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: IHeaderProps) {

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money logo" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>


      </Content>
    </Container>
  );
}