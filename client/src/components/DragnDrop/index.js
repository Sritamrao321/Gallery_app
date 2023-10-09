import React, { useEffect, useState } from "react";
import "./styles.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function DragNDrop(props) {
  const { defaultList = [], deleteImage = () => {} } = props;

  const [itemList, setItemList] = useState(defaultList);
  useEffect(() => {
    setItemList(defaultList);
  }, [defaultList]);
  const handleDrop = (droppedItem) => {
    if (!droppedItem.destination) return;
    var updatedList = [...itemList];

    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);

    updatedList.splice(droppedItem.destination.index, 0, reorderedItem);

    setItemList(updatedList);
  };
  console.log("itemList", defaultList, itemList);
  return (
    <div className="App">
      <DragDropContext onDragEnd={handleDrop}>
        <Droppable droppableId="list-container">
          {(provided) => (
            <div
              className="list-container"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {itemList.map((item, index) => (
                <Draggable key={item.val} draggableId={item.val} index={index}>
                  {(provided) => (
                    <div
                      className="item-container"
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                    >
                      <span
                        className="delete"
                        onClick={() => deleteImage(index)}
                      >
                        &times;
                      </span>
                      <div>
                        <p>image index :- {index + 1}</p>
                        {/* <p>image name :- {item.name}</p> */}
                        <img className="img-size" src={item.url} />
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
