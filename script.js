function addTask() {

    const input = document.getElementById("task");

    if (input.value.trim() === "") {
        return;
    }

    const li = document.createElement("li");

    li.textContent = input.value;

    li.addEventListener("click", function () {
        li.remove();
    });

    document.getElementById("list").appendChild(li);

    input.value = "";

}