const cuerpoTabla = document.querySelector('#tbody');
const URL = "http://localhost:3000/tasks";

const addTask = (task) => {

    const fila = cuerpoTabla.insertRow();
    fila.dataset.id = task.id;

    fila.insertCell(0).textContent = task.task;
    fila.insertCell(1).textContent = task.Description;
    fila.insertCell(2).textContent = task.date;
    fila.insertCell(3).textContent = task.priority;

    const acciones = fila.insertCell(4);

    // ✔ COMPLETAR (PUT)
    const btnComplete = document.createElement('button');
    btnComplete.textContent = "✔";

    btnComplete.addEventListener('click', async () => {

        fila.classList.toggle('completed');

        const updatedTask = {
            task: fila.cells[0].textContent,
            Description: fila.cells[1].textContent,
            date: fila.cells[2].textContent,
            priority: fila.cells[3].textContent,
            completed: fila.classList.contains('completed')
        };

        await fetch(`${URL}/${fila.dataset.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedTask)
        });

    });

    // ❌ DELETE
    const btnDelete = document.createElement('button');
    btnDelete.textContent = "X";

    btnDelete.addEventListener('click', async () => {

        await fetch(`${URL}/${fila.dataset.id}`, {
            method: "DELETE"
        });

        fila.remove();

    });

    acciones.appendChild(btnComplete);
    acciones.appendChild(btnDelete);
};

export default { addTask };