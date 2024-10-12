import { useState } from 'react'
import './App.css'
import Pendentes from './Pendentes'
import Concluidas from './Concluidas'
import FormNovaTarefa from './FormNovaTarefa'
import {v4 as uuidv4} from 'uuid';

function App() {
  
  //const [tarefa,setTarefa] = useState("")

  const[tarefasPendentes,setTarefasPendentes] = useState([])
  const adicionarTarefa = (tarefa) => {
    setTarefasPendentes([...tarefasPendentes, {descricao: tarefa, id: uuidv4()}])
    //console.log(tarefasPendentes)
  }

  const [tarefasConcluidas, setTarefasConcluidas] = useState([])
  const concluirTarefa = (id) =>{
    setTarefasConcluidas([...tarefasConcluidas, tarefasPendentes.find(tarefa => tarefa.id == id)])
    setTarefasPendentes(tarefasPendentes.filter(tarefa => tarefa.id != id))
    //Excluir com filter das pendentes
  }

  const excluirTarefa = (id) =>{
    setTarefasConcluidas(tarefasConcluidas.filter(tarefa=> tarefa.id != id))
  }

  const [formActive, setFormActive] = useState (false)
  const toggleFormActive = () =>{
    setFormActive(!formActive)
    console.log(formActive)
  }


  return (
    <>
      <div>
        <header>
          <h1>Lista de tarefas</h1>
          <div>
            <Pendentes tarefasPendentes={tarefasPendentes} concluirTarefa={concluirTarefa}/>
            <Concluidas tarefasConcluidas={tarefasConcluidas} excluirTarefa={excluirTarefa}/>
          </div>
          <div>
            <button onClick={() => toggleFormActive()}>Adicionar nova Tarefa</button>
            <FormNovaTarefa formActive={formActive} adicionarTarefa={adicionarTarefa}/>
          </div>
        </header>
      </div>
    </>
  )
}

export default App
