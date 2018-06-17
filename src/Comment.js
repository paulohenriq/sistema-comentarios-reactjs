import React from 'react'; //Aqui não precisa importar a classe Component, já que não irá herdar

//Isto é um functional stateless component
const Comment = (props) => {        
    return(
        <div className="card">
            <p className="card-body">{props.comment.comment}</p>
        </div>
    )    
}

export default Comment