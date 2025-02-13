import { useState } from 'react';
import styled from 'styled-components';
import { AnimatedList } from '../../components';
import { useFirstElementHeight } from '../../hooks/use-first-element-height';

export const Page1 = () => {
  const [items, setItems] = useState([
    { id: 1, title: 'Элемент 1', text: 'Текст 1' },
    { id: 2, title: 'Элемент 2', text: 'Текст 2' },
    { id: 3, title: 'Элемент 3', text: 'Текст 3' },
    { id: 4, title: 'Элемент 4', text: 'Текст 4' },
    { id: 5, title: 'Элемент 5', text: 'Текст 5' },
    { id: 6, title: 'Элемент 6', text: 'Текст 6' },
    { id: 7, title: 'Элемент 7', text: 'Текст 7' },
    { id: 8, title: 'Элемент 8', text: 'Текст 8' },
    { id: 9, title: 'Элемент 9', text: 'Текст 9' },
    { id: 10, title: 'Элемент 10', text: 'Текст 10' },
  ]);
  const [isActive, setIsActive] = useState(false);
  const { elementHeight, firstElementRef } = useFirstElementHeight(items);

  return (
    <div>
      <h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </h3>
      <h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </h3>
      <h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </h3>
      <h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </h3>

      <div style={{ position: 'relative', display: 'flex' }}>
        <button
          style={{
            position: 'sticky',
            top: 0,
            alignSelf: 'flex-start',
          }}
          onClick={() => setIsActive(!isActive)}
        >
          Toggle
        </button>

        <ListWrapper isOpen={isActive}>
          <AnimatedHeight minHeight={elementHeight}>
            <AnimatedList
              items={items}
              onReorder={setItems}
              getItemId={(item) => item.id}
              renderItem={(item, index, isActive) => (
                <Block
                  ref={index === 0 ? firstElementRef : null}
                  isActive={isActive}
                >
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </Block>
              )}
            />
          </AnimatedHeight>
        </ListWrapper>
      </div>
    </div>
  );
};

const Block = styled.div<{ isActive: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 500px;
  height: 125px;
  background-color: white;
  border: 1px solid ${({ isActive }) => (isActive ? 'blue' : '#e0e0e0')};
  border-radius: 10px;
  cursor: pointer;
`;

export const ListWrapper = styled.div<{ isOpen?: boolean }>`
  // Чтобы не пропадала тень у дочерних элементов из-за overflow: hidden;
  padding: ${({ isOpen = true }) => (isOpen ? '8px' : '0 8px')};
  margin: ${({ isOpen = true }) => (isOpen ? '-8px' : '0 -8px')};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: ${({ isOpen = true }) => (isOpen ? '1fr' : '0fr')};
  justify-content: center;
  row-gap: 8px;
  width: 100%;
  min-height: 40;
  overflow: hidden;
  transition: grid-template-rows 500ms cubic-bezier(0.215, 0.61, 0.355, 1);
  box-sizing: content-box !important;
`;

export const AnimatedHeight = styled.div<{ minHeight?: number }>`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  min-height: ${({ minHeight }) => minHeight ?? 0}px;
`;
