const statusGrid = document.getElementById("status-grid");

export function renderInitialGrid(serverArray) {
  statusGrid.innerHTML = "";
  serverArray.forEach((server) => {
    const serverCard = document.createElement("div");
    serverCard.classList.add("server-card","checking");
    serverCard.id = `server-${server.id}`;
    serverCard.innerHTML = `
            <h3>${server.name}</h3>
            <span class="badge" id="badge-${server.id}">CHECKING...</span>
            <div class="timestamp" id="time-${server.id}">Last Checked: --</div>
        `;
    statusGrid.appendChild(serverCard);
  });
}

export function updateServerCard(id, status, timeObject) {
  const serverCard = document.getElementById(`server-${id}`);
  if (serverCard) {
    const statusElement = serverCard.querySelector(".badge");
    const timestampElement = serverCard.querySelector(".timestamp");
    statusElement.textContent = status;
    timestampElement.textContent = timeObject.toLocaleTimeString();
    serverCard.classList.remove("checking", "online", "offline");
    serverCard.classList.add(status.toLowerCase());
  }
}
