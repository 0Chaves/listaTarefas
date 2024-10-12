import './Tarefas.css'

const Pendentes = ({tarefasPendentes, concluirTarefa}) =>{


    return(
        <div>
            <h3>Tarefas Pendentes</h3>
            <ul>
                {tarefasPendentes.length > 0 ?
                tarefasPendentes.map(tarefa => {
                    return(
                    <li key={tarefa.id} className='pendentes'>
                        {tarefa.descricao} <input type="checkbox" name="check" id={tarefa.id} checked={false} onChange={()=>concluirTarefa(tarefa.id)}/>
                    </li>
                    )}
                ) : <p>Não há tarefas</p>
                }
            </ul>
        </div>
    )
}

export default Pendentes