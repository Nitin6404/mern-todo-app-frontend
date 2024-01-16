import { useState } from "react";

export function CreateTodo(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return <div>
        <input type="text" placeholder="title" onChange={function(e){
            const value = e.target.value;
            setTitle(e.target.value);
        }}></input>  <br/> 
        <input type="text" placeholder="description" onChange={function(e){
            const value = e.target.value;
            setDescription(e.target.value);
        }}></input>  <br/>

        <button onClick={function (){
            fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(async function(res){
                    const json = await res.json();
                    alert("Todo Added")
                })
                    .catch((error) => {
                        console.error("Error adding todo:", error);
                    });
        }}>Add a Todo</button>
    </div>
}