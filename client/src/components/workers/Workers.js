import { useState, useEffect } from 'react';
import axios from 'axios';
import WorkerList from './WorkerList';
import WorkerForm from './WorkerForm';

const Workers = () => {
    // filling in empty array with data from backend
    const [workers, setWorkers] = useState([])
    // call this useEffect to preload
    useEffect( () => {
        axios.get("/api/workers")
        // now promise handling/what happens when we get what we want vs we don't get it
            .then( res => {
            setWorkers(res.data)
        })
        .catch( err => console.log(err) )
    }, [])
    // pass in the array because if there are any changes it will pass them in and it won't run continuously

    const addWorker = (worker) => {
        axios.post("/api/workers", {worker})
        .then( res => {
            // spread out all the workers, plus the new
            setWorkers([...workers, res.data ])
        })
        .catch ( err => console.log(err) )
    }

    const updateWorker = (id, worker) => {
        axios.put(`/api/workers/${id}`, { worker })
        .then( res => {
            const updateWorkers = workers.map( w => {
                if (w.id === id) {
                    return res.data
                }
            return w
        })
        setWorkers(updateWorkers)
    }).catch ( err => console.log(err) )
    }

    const deleteWorker = (id) => {
        axios.delete(`/api/workers/${id}`)
        .then( res => {
           setWorkers ( workers.filter( w => w.id !== id )) 
        //    is this right?  or res.message
           alert(res.data.message)
        } )
        .catch ( err => console.log(err) )
    }


    return(
        <>
        <h1>
            Service Plus:  Providing access to your local experts
        </h1>
        <WorkerForm addWorker={addWorker} />
        <WorkerList 
        workers={workers} 
        updateWorker={updateWorker} 
        deleteWorker={deleteWorker} />

        </>
    )
}

export default Workers;