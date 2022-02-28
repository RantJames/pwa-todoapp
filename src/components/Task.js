import 'bootstrap/dist/css/bootstrap.min.css';
import { format } from 'date-fns';
export const Task = ({ taskname, duedate, assignedTo }) => {
    return (
        <div className='border border-primary card text-white bg-success mb-3 col-md-6 offset-md-3'>
           <link rel="manifest" href="/manifest.json"></link>
            <h1>{taskname}</h1>           
            <h2>Due Date:{getFormatedDate(duedate)}</h2>
            <p>Assigned:{assignedTo}</p>
            
        </div>
    )
}

function getFormatedDate(duedate) {

    return format(new Date(duedate), 'dd-MM-yyyy')

}