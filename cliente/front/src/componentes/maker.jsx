import { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import  Draggable  from "./DragAndDrop/Dragable";
import  Droppable  from "./DragAndDrop/Dropable";

export default function (){
  const [parent, setParent] = useState(null)
  const dragable = (
    <Draggable id="dragable">
      Go
    </Draggable>
  );
  return(
    <DndContext onDragEnd={handlerDragEnd}>
      {!parent ? dragable :null}
      <Droppable id="dropable">
        {parent === "dropable" ? dragable: 'Drop here'}
      </Droppable>
    </DndContext>
  );
  function handlerDragEnd({over}){
    setParent(over ? over.id : null)    
  }


}