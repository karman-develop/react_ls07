import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const items = [
  { id: "item0", content: "First task" },
  { id: "item1", content: "Second task" },
  { id: "item2", content: "Third task" },
  { id: "item3", content: "Fourth task" },
  { id: "item4", content: "Fifth task" }
];

const reorder = (list, startIndex, endIndex) => {
  const removed = list.splice(startIndex, 1)
  list.splice(endIndex, 0, removed[0])
}

const TestCode = () => {

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    reorder(items, result.source.index, result.destination.index);
  }
  
  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {
                items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>{item.content}</div>
                    )}
                  </Draggable>
                ))
              }
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default TestCode