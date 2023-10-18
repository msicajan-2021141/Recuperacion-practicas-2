import React, { useEffect, useState } from 'react'
import { AddTask } from './AddTask'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';

export const Task = () => {
    const [tasks, setTasks] = useState([
    {
        name: 'Recibir clases de refuerzo',
        description: 'Llegar al colegio a las 10 am para recibir clases',
        date: '31/5/2023',
        priority: 10
    },{
        name: 'Ver la serie',
        description: 'Ver betty la fea toda la noche',
        date: '1/6/2023',
        priority: 5
    }]);

    const getTasks = async()=>{
        try{
          const { data } = await axios('http://localhost:3001/task/get')
          if(data.tasks){
            setTasks(data.tasks)
          }
        }catch(err){
          console.log(err)
          throw new Error('Error getting tasks')
        }
      }

    useEffect(()=>{
        getTasks()
    }, [tasks])

  return (
    <>




      
      <div class="container">
        <div class="row">
          
            <div className='table'>
              <AddTask setTasks={tasks} tasks={tasks}></AddTask>
            </div>
          
          <div class="col">

            <MDBTable>
              <MDBTableHead heigt>
                <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Descripción</th>
                  <th>Fecha</th>
                  <th>Prioridad</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {
                  tasks.map(({ name, description, date, priority }, i) => {
                    return (
                      <tr key={i}>
                        <td>{i}</td>
                        <td>{name}</td>
                        <td>{description}</td>
                        <td>{date}</td>
                        <td>{priority}</td>
                      </tr>
                    )
                  })
                }
              </MDBTableBody>
            </MDBTable>

          </div>

        </div>
      </div>
    </>
  )
}
