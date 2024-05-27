import "./style/maker.css"
import { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import  Draggable  from "./DragAndDrop/Dragable";
import  Droppable  from "./DragAndDrop/Dropable";

export default function (){
  const [parent, setParent] = useState(null)
  const dragable = (
    <Draggable id="dragable">
      
    </Draggable>
  );
  return(
    <div className="cont">
    <div className="drop">
    <DndContext onDragEnd={handlerDragEnd}>

      {!parent ? dragable :null}
      <Droppable id="img">
        {parent === "img" ? dragable: 'Drop here'}
      </Droppable>
      <Droppable id="text">
      {parent === "text" ? dragable: 'Drop here'}
      </Droppable>
    </DndContext>
    </div>
    <div className="dragable">

    </div>
    </div>
  );
  function handlerDragEnd({over}){
    setParent(over ? over.id : null)    
  }


}
