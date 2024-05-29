import { React } from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export default function Draggable(props){

  const {attributo, listeners, setNodeRef, transform} = useDraggable({
    id:props.id,
    data:{
      supports:['']
    }
    
  })
  const style = {
    transform: CSS.Translate.toString(transform),
  };
  return(
    <div ref={setNodeRef}>
    <button style={style} {...listeners} {...attributo}> 
    {props.children}
    texto submit
    </button>
    
    </div>
  )
}