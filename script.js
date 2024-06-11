const apiUrl = "https://ca539670ec1a31fc2caf.free.beeceptor.com/api/users/";

document.getElementById("createForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("createName").value;
  const email = document.getElementById("createEmail").value;

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email }),
  });

  const data = await response.json();
  window.alert("Usuário Criado");
});

document.getElementById("readUsers").addEventListener("click", async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();

  const userList = document.getElementById("userList");
  userList.innerHTML = "";
  data.forEach((user) => {
    const li = document.createElement("li");
    li.textContent = `${user.id} - ${user.name} - ${user.email}`;
    userList.appendChild(li);
  });
});

document.getElementById("updateForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const id = document.getElementById("updateId").value;
  const name = document.getElementById("updateName").value;
  const email = document.getElementById("updateEmail").value;

  const response = await fetch(`${apiUrl}${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email }),
  });

  const data = await response.json();
  window.alert("Usuário Atualizado");
});

document.getElementById("deleteForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const id = document.getElementById("deleteId").value;

  const response = await fetch(`${apiUrl}${id}`, {
    method: "DELETE",
  });

  const data = await response.json();
  window.alert("Usuário Deletado");
});
