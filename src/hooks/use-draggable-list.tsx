import { useState } from 'react';

export const useDraggableList = (initialItems: any) => {
  const [items, setItems] = useState(initialItems);

  const onDragStart = (event: any, index: number) => {
    event.dataTransfer.setData('drag-item-index', index);
  };

  const onDragOver = (event: any) => {
    event.preventDefault(); // Необходимое действие для активации drop
  };

  const onDrop = (event: any, dropIndex: number) => {
    const dragIndex = event.dataTransfer.getData('drag-item-index');
    const updatedItems = [...items];
    const [draggedItem] = updatedItems.splice(dragIndex, 1);
    updatedItems.splice(dropIndex, 0, draggedItem);
    setItems(updatedItems);
  };

  return {
    items,
    onDragStart,
    onDragOver,
    onDrop,
  };
};
