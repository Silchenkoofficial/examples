import { observer } from 'mobx-react-lite';
import { Wrapper, ImageWrapper, Image } from './media-previewer.styled';
import { useDraggableList } from '../../hooks';
import { useState } from 'react';

const data = [
  {
    id: '1',
    imageUrl:
      'https://images.unsplash.com/photo-1723754166148-2ceb2d84890f?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '2',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1723741320347-bf8a65518f8e?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '3',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1722851534029-31a83a992dc6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8',
  },
  {
    id: '4',
    imageUrl:
      'https://images.unsplash.com/photo-1723754166148-2ceb2d84890f?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '5',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1723741320347-bf8a65518f8e?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export const MediaPreviewer = observer(() => {
  const { items, onDragStart, onDragOver, onDrop } = useDraggableList(data);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (event: any, index: number) => {
    setIsDragging(true);
    onDragStart(event, index);
  };

  const handleDrop = (event: any, index: number) => {
    setIsDragging(false);
    onDrop(event, index);
  };

  return (
    <Wrapper>
      {items.map((item: any, index: number) => (
        <ImageWrapper
          key={item.id}
          draggable
          onDragStart={(event) => handleDragStart(event, index)}
          onDragOver={onDragOver}
          onDrop={(event) => handleDrop(event, index)}
          isDragging={isDragging}
        >
          {/* <img
            src={item.imageUrl}
            alt={`Image ${item.id}`}
            style={{ width: '100%', height: 'auto' }}
          /> */}
        </ImageWrapper>
        // <ImageWrapper>
        //   <Image src={item.imageUrl} alt={''} />
        // </ImageWrapper>
      ))}
    </Wrapper>
  );
});
