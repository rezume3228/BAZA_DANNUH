document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  fetch("https://raw.githubusercontent.com/USERNAME/REPO/BRANCH/data.json")
    .then(res => res.json())
    .then(data => {
      const found = data.users.find(u => u.username === user && u.password === pass);
      document.getElementById("status").textContent = found ? "Доступ разрешён!" : "Неверные данные.";
    })
    .catch(() => {
      document.getElementById("status").textContent = "Ошибка загрузки данных.";
    });
});
