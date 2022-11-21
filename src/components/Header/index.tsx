import Logo from '../../assets/logo.svg';

import { Container, Content } from './styles';

type Props = {
  OnOpenNewTransactionModal: () => void;
};

export const Header = ({ OnOpenNewTransactionModal }: Props) => {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="dt money" />
        <button type="button" onClick={OnOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
};
