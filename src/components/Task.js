import 'bootstrap/dist/css/bootstrap.min.css';

export const Task = ({ taskname, duedate, assignedTo }) => {
    return (
        <div className='border border-primary'>
           
            <h1>{taskname}</h1>           
            <h2>Due Date:{duedate.toString()}</h2>
            <p>Assigned:{assignedTo}</p>
            
        </div>
    )
}