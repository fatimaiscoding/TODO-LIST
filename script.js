     let addBtn = document.getElementById("addBtn");
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    addBtn.addEventListener("click", function() {
      let taskText = taskInput.value;
      if (taskText === "") {
        alert("Please write something!");
      } else {
        let li = document.createElement("li");
        li.innerHTML = `
          <span>${taskText}</span>
          <div class="icons">
            <i class="fa-solid fa-pen-to-square edit"></i>
            <i class="fa-solid fa-trash delete"></i>
          </div>
        `;
        taskList.appendChild(li);
        taskInput.value = "";

        // delete
        li.querySelector(".delete").onclick = function() {
          li.remove();
        }

        // edit
        li.querySelector(".edit").onclick = function() {
          let newText = prompt("Edit your task:", li.querySelector("span").innerText);
          if (newText) {
            li.querySelector("span").innerText = newText;
          }
        }
      }
    });