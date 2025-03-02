const button = document.getElementById("btn-ajout");
const input = document.getElementById("inputTask");
const listTask = document.querySelector("ol");

button.addEventListener("click", function () {
  if (input.value.length == 0) {
    alert("aucune tache n'a été saisie");
  } else {
    // CREATION DES ELEMENTS
    const li = document.createElement("li"); // crée l'élement li
    const taskItem = document.createElement("div"); //crée l'élement div comme 'container' de la tache et des bouttons pour de la flexibilté
    const inputValue = input.value.trim(); //recupère la valeur du texte saisi dans l'input en supprimant les espaces inutiles
    const taskText = document.createElement("span");
    const btnItem = document.createElement("div");
    const btnDelete = document.createElement("button"); // crée le boutton supprimer
    const btnFinish = document.createElement("button"); // crée le boutton terminer
    const hr = document.createElement("hr");
    taskText.textContent = inputValue;
    //INSERTION
    taskItem.append(taskText); //insère le texte saisi dans le container

    btnItem.append(btnDelete); //insère le boutton supprimer dans le container de bouttons
    btnItem.append(btnFinish); //insère le boutton terminer dans le container de bouttons
    taskItem.append(btnItem); //insere de container de bouttons dans le container de taches

    li.appendChild(taskItem); // le container est mis dans l'élement li

    li.append(hr); //ajoute une ligne a chaque ajout de tache pour plus de style
    listTask.append(li);//ajoute tous les elements de la tache dans la liste

    //ATTRIBUTION DES CLASSES
    btnDelete.classList.add("btn-delete"); //ajoute une classe pour manipuler le css
    btnFinish.classList.add("btn-finish"); //ajoute une classe pour manipuler le css
    btnDelete.textContent = "Supprimer"; //ajouter du texte au bouton de suppression
    btnItem.classList.add("btn-item");
    taskItem.classList.add("task-item"); //ajouter la classe task-item pour le css
    btnFinish.textContent = "Terminer"; //ajouter du texte au bouton terminer
    taskText.classList.add("input-value")
    input.value = ""; //vide le champ input apres validation
    //EVENEMENT CLICK POUR LE BOUTTON TERMINER
    btnDelete.addEventListener("click", function () {
      listTask.removeChild(li); //supprime la tache dès qu'on clique sur le boutton
    });
    btnFinish.addEventListener("click", function () {
      taskText.style.color = "green";
      taskText.style.textDecoration = "line-through"; //permet de barrer la tache quand on clique sur le boutton terminer
    });
  }
});
