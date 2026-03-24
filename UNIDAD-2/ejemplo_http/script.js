import Form from "./components/formulario.js";
import tabla from "./components/tabla.js";

const URL = "http://localhost:3000/tasks";

(async () => {

    // 🔥 GET
    const res = await fetch(URL);
    const tasks = await res.json();

    tasks.forEach(task => tabla.addTask(task));

    // POST
    Form.setDatos((task) => {
        tabla.addTask(task);
    });

})();