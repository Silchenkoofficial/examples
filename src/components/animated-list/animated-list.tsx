import { useRef, ReactNode } from 'react';
import styled from 'styled-components';

const ANIMATION_DURATION = 300;

interface AnimatedListProps<T> {
  items: T[];
  onReorder: (newItems: T[]) => void;
  renderItem: (item: T, index: number, isActive: boolean) => ReactNode;
  getItemId: (item: T) => number | string;
}

export const AnimatedList = <T,>({
  items,
  onReorder,
  renderItem,
  getItemId,
}: AnimatedListProps<T>) => {
  const listRef = useRef<HTMLDivElement>(null);

  const moveToUp = (id: number | string) => {
    const elements = listRef.current?.children;
    if (!elements) return;

    const positions: Record<string, number> = {};
    for (const el of elements) {
      const rect = (el as HTMLElement).getBoundingClientRect();
      positions[String(el.getAttribute('data-id'))] = rect.top;
    }

    const index = items.findIndex((item) => getItemId(item) === id);

    if (index > 0) {
      const newItems = [...items];
      const [movedItem] = newItems.splice(index, 1);
      newItems.unshift(movedItem);
      onReorder(newItems);

      requestAnimationFrame(() => {
        const firstElement = elements[0] as HTMLElement;
        firstElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        for (const el of elements) {
          const itemId = el.getAttribute('data-id');
          const oldTop = positions[String(itemId)];
          const newTop = (el as HTMLElement).getBoundingClientRect().top;

          if (oldTop !== undefined) {
            const deltaY = oldTop - newTop;

            if (deltaY !== 0) {
              const element = el as HTMLElement;
              element.style.transform = `translateY(${deltaY}px)`;
              element.style.transition = 'none';

              requestAnimationFrame(() => {
                element.style.transform = '';
                element.style.transition = `transform ${ANIMATION_DURATION}ms ease`;
              });
            }
          }
        }
      });
    }
  };

  return (
    <Wrapper>
      <ListContainer ref={listRef}>
        {items.map((item, index) => (
          <ItemWrapper
            key={getItemId(item)}
            data-id={getItemId(item)}
            isActive={index === 0}
            onClick={() => moveToUp(getItemId(item))}
          >
            {renderItem(item, index, index === 0)}
          </ItemWrapper>
        ))}
      </ListContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ItemWrapper = styled.div<{ isActive: boolean }>`
  will-change: transform;
  position: relative;
  z-index: ${({ isActive }: { isActive: boolean }) => (isActive ? 100 : 1)};
  transition: z-index 0ms linear ${ANIMATION_DURATION}ms;
`;
