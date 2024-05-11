import { React } from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export default function Draggable(props){

  const {attributo, listeners, setNodeRef, transform} = useDraggable({
    id:props.id,
  })
  const style = {
    transform: CSS.Translate.toString(transform),
  };
  return(
    <button ref={setNodeRef} style={style} {...listeners} {...attributo}> 
    {props.children}
    </button>
  )
}