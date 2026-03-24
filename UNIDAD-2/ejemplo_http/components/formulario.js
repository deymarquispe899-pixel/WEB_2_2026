const form = document.querySelector('#taskForm');
const URL = "http://localhost:3000/tasks";

const datosForm = () => {
    return {
        task: document.querySelector('#taskInput').value,
        Description: document.querySelector('#descInput').value,
        date: document.querySelector('#dateInput').value,
        priority: document.querySelector('#priorityInput').value,
        completed: false
    };
};

const reset = () => form.reset();

const setDatos = (callback) => {

    form.addEventListener('submit', async (e) => {

        e.preventDefault();

        const task = datosForm();

        const res = await fetch(URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(task)
        });

        const newTask = await res.json();

        callback(newTask);

        reset();

    });

};

export default { setDatos }; // 🔥 SOLUCIÓN DEL ERROR