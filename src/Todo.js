import React from "react"
import "./index.css";

function Todo({todo, toggleTodo})
{
	function onCheckboxChange()
	{
		toggleTodo(todo.id)
	}

	return (
		<div className="style">
				<input type="checkbox" onChange={onCheckboxChange} seleced={todo.complete}></input>
			<p>{todo.name}</p>
		</div>
			
		
		
	)
}

export default Todo