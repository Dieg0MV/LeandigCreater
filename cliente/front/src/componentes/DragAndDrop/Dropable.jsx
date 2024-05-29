import { React } from "react";
import { useDroppable } from "@dnd-kit/core";

export default function Droppable(props) {
  
  const {isOver, setNodeRef}= useDroppable({
    id:props.id,
    data: {
      index:props.index,
    }
  })
  const style = {
    color: isOver ? "blue" : undefined ,
    opacity: isOver ? 1 : 0.5
  };
  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  )
}