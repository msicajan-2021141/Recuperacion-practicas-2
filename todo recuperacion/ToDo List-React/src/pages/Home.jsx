import {React} from 'react'
import {Task} from '../components/task'
import '../pages/Home.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { MDBBtn } from 'mdb-react-ui-kit';

export const Home = () => {
  return (
    <>
    <div className='container'>
      <div className='container'>
        <h1 className='text-lx'>Home</h1>
        <div>
          <br></br>
        </div>
        <Task></Task>
      </div>


      </div>
    </>
  )
}

