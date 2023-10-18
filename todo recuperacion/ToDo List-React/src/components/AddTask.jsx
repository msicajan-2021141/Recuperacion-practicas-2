import React, {useState} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'


export const AddTask = ({tasks, setTasks}) => {
    const [formData, setformData] = useState({})
    
    const addTask = async(e)=>{
        try{
            e.preventDefault();
            const alreadyTask = tasks.findIndex((tasks)=>
                tasks.name === formData.name
            ) 
            if(alreadyTask === -1){
                let { data } = await axios.post('http://localhost:3001/task/add', formData)
                console.log(data)
                if(data.ok === false){
                    console.log(data)
                    setTasks([
                        ...tasks,
                        formData
                    ])
                    return e.target.reset()
                }
                return e.target.reset()
            }else{
                alert('Ya existe la tarea')
                return e.target.reset()
            }
        }catch(err){
            return alert('err.data.message')
            
        }
    }
    
    const handleChange = (e)=>{    
        setformData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    
  return (
    <div className='form'>
        <form onSubmit={(e)=> addTask(e)}>
            <div>
            <label htmlFor="">nombre</label>
                <input onChange={handleChange} name='name' id="name" type="text"  aria-label="First name"/>
            </div>
            <div>
                    <br></br>
                    <label htmlFor="">Descripción</label>
                <textarea onChange={handleChange}  name="description" id="description"  rows="3" className="form-control"></textarea>
            </div>
            <br></br>
            <div>
                <label htmlFor="">Fecha</label>
                <br></br>
                <input onChange={handleChange} name='date' id="date" type="date" />
            </div>
            <br></br>
            <div>
                <label htmlFor="">Prioridad</label>
                <br></br>

                <input type="number" onChange={handleChange} name='priority' id="priority" className="form-control" />

                
            </div>
            <br></br>
            
            <button type='submit' className="btn">AGREGAR</button>
            <br></br>
        </form>
        <br></br>
        
    </div>
    
  )
}

AddTask.propTypes = {
    tasks: PropTypes.array
}