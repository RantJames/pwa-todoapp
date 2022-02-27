import { db } from './db'

export function getAllTasksFromDB() {
    return db.tasks.toArray().then((data) => {
        return data
    })
}

export function addTaskToDB(taskname, duedate, assignedTo) {
    console.log(taskname, duedate, assignedTo);
    db.tasks.put({ taskname, duedate, assignedTo })
        .then(() => true)
        .catch(err => {
            alert("Ouch... " + err)
        })
}