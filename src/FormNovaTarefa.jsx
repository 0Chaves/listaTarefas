import {useState} from 'react'
const FormNovaTarefa = ({formActive, adicionarTarefa}) =>{

    const [tarefa,setTarefa] = useState("")
    const handleInputTarefaChange = e =>{
        setTarefa(e.target.value)
    }

    const handleAddTarefa = () =>{
        adicionarTarefa(tarefa)
        setTarefa("")
    }

    const handleKeyDown = (e) =>{
        if(e.key === 'Enter'){
            handleAddTarefa()
        }
    }

    return(
        <>
        {formActive?
        <div>
            <label htmlFor="tarefa">Nova tarefa: </label>
            <input type="text" id="tarefa" size={50} value={tarefa} onChange={handleInputTarefaChange} onKeyDown={handleKeyDown}/>
            <button onClick={()=> {
                if(tarefa != ""){
                    return handleAddTarefa()
                } 
            }}>adicionar</button>
        </div> 
        : null}
        </> 
    )
}

export default FormNovaTarefa