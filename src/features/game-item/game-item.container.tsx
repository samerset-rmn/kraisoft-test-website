import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

interface IGameItemContainerProps {
  id: string;
}

export const GameItemContainer: React.FC<IGameItemContainerProps> = ({ id }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id
  });

  const style = {
    border: '1px solid black',
    padding: '20px',
    maxWidth: 'max-content',
    transform: CSS.Translate.toString(transform)
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      GameItemContainer
    </div>
  );
};
