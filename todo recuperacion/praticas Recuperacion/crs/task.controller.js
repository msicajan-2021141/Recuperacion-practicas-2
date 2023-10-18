'use strict' 
const Task = require('./task.model'); 

exports.addTask = async(req, res)=>{
    try{
        let data = req.body;
        let newTaks = new Task(data);
        await newTaks.save();
        return res.send({message: 'se gurado corectamente'});
    }catch(err){
        console.error(err);
        return res.send({message: 'Error prevencion al guardar la actividad', err});
    }
}

exports.getTasks = async(req, res)=>{
    try{
        let tasks = await Task.find();
        if(tasks.length == 0) return res.status(404).send({message: ' No hay actividades aún :('})
        return res.send({tasks});
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error al obtener las actividades'});
    }
}

exports.updateTask = async(req, res)=>{
    try{
        let task = req.params.id;
        let data = req.body;
        let updatedTask = await Task.findOneAndUpdate(
            {_id: task},
            data,
            {new: true}
        )
        if(!updatedTask) return res.send({message: 'Task not found and not  updated'})
        return res.send({message: 'Task updated: ', updatedTask})
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error al obtener las actividades'});
    }
}

exports.deleteTask = async(req, res)=>{
    try{
        let idTask = req.params.id;
        let deletedTask = await Task.findOneAndDelete({_id: idTask});
        if(!deletedTask) return res.status(404).send({message: 'Error removing task or already deleted'});
        return res.send({message: 'Task deleted sucessfully', deletedTask});
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error removing product'})
    }
}
