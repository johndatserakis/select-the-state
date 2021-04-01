import styled from 'styled-components/macro';
import { ItemToFind } from './cards/ItemToFind';
import { ItemInformation } from './cards/ItemInformation';
import { GameInformation } from './cards/GameInformation';
import { pxToRem } from '../../utils/style';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  > div:not(:last-child) {
    margin-bottom: ${pxToRem(12)} !important;
  }
`;

export const Display = () => {
  return (
    <Container>
      <ItemToFind />
      <GameInformation />
      <ItemInformation />
    </Container>
  );
};
