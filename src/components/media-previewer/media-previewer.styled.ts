import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 12px;
`;

export const ImageWrapper = styled.div<{ isDragging: boolean }>`
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  cursor: grab;
  transition: ${(props) => (props.isDragging ? 'none' : 'transform 0.3s ease')};
  transform: ${(props) => (props.isDragging ? 'scale(1.05)' : 'scale(1)')};

  &:nth-child(1) {
    background-color: rebeccapurple;
  }

  &:nth-child(2) {
    background-color: gainsboro;
  }

  &:nth-child(3) {
    background-color: yellow;
  }

  &:nth-child(4) {
    background-color: saddlebrown;
  }

  &:nth-child(5) {
    background-color: cadetblue;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-height: 250px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  pointer-events: none;
`;
