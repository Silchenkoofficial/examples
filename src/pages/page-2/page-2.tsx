import styled from 'styled-components';
import { Icons } from '../../assets';

export const Page2 = () => {
  return (
    <Wrapper>
      <Block>
        <h4>Лицевой счёт</h4>
        {Icons.ChevronIcon}
      </Block>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #f9fafc;
  width: 100dvw;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Block = styled.div`
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 378px;
  background-color: #ffffff;
  border: 1px solid #f2f5f8;
  border-radius: 12px;

  h4 {
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #1f2939;
  }
`;
