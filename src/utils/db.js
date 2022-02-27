import Dexie from 'dexie';

export const db = new Dexie('TaskListDB');

db.version(1).stores({
    tasks: `
        id++,
        duedate,
        taskname,
        assignedto`,
});