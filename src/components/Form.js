import { useState, useRef } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';


import { addTaskToDB } from "../utils/helpers";

export const Form = () => {
    const [taskname, setTaskName] = useState("");
    const [duedate, setDueDate] = useState("");
    const [assignedTo, setAssignedTo] = useState("");

    const taskname_ele = useRef(null);
    const duedate_ele = useRef(null);
    const assignedTo_ele = useRef(null);

    const submitForm = async () => {
        await addTaskToDB(taskname, duedate, assignedTo)
    }

    return (
        <div>
           
<form>
<link rel="manifest" href="/manifest.json"/>
  <div className="form-group row">
    <label className="col-sm-2 col-form-label">Task Name</label>
    <div className="col-sm-8">
    <input className="form-control bg-secondary text-white" ref={taskname_ele}
                    type="text"
                    id="taskname"
                    value={taskname}
                    onChange={(e) => setTaskName(e.target.value)}
                    placeholder="Task Name" />
    </div>
  </div>
  <div className="form-group row">
    <label className="col-sm-2 col-form-label">Due Date</label>
    <div className="col-sm-8">
    <input className="form-control bg-secondary text-white" ref={duedate_ele}
                    type="date"
                    id="date"
                    onChange={(e) => {
                    setDueDate(new Date(e.target.value))
                    }}
                    placeholder="YYYY/MM/DD"/>
    </div>
  </div>
  <div className="form-group row">
    <label className="col-sm-2 col-form-label">Assigned To</label>
    <div className="col-sm-8">
    <input className="form-control  bg-secondary text-white" ref={assignedTo_ele}
                    type="text"
                    id="assigned"
                    value={assignedTo}
                    onChange={(e) => setAssignedTo(e.target.value)}
                    placeholder="Assigned to ..."/>
    </div>
  </div>
  <div className="form-group row pt-2">
<span className="align-middle">
  <button type="submit" className="btn btn-primary col-sm-2" onClick={() => submitForm()}>Add Task</button>
  </span>
  </div>
</form>
</div>
    )
}