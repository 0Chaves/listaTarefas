import './Tarefas.css'
const Concluidas = ({tarefasConcluidas, excluirTarefa}) =>{
    return(
        <div>
            <h3>Tarefas Concluidas</h3>
            <ul>
                {tarefasConcluidas.length > 0 ?
                tarefasConcluidas.map(tarefa => <li key={tarefa.id} className="concluidas">{tarefa.descricao} <button onClick={()=>excluirTarefa(tarefa.id)}>Excluir</button></li>) : <p>Não há tarefas</p>
                }
            </ul>
        </div>
    )
}

export default Concluidas