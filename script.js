document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("container");

    // Carrega todos os cantores do localStorage
    const lista_cantores = JSON.parse(localStorage.getItem("cantores")) || [];

    lista_cantores.forEach((objeto_cantor, index) => {
        createElement(objeto_cantor, index);
    });

    const form = document.getElementById("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const objeto_cantor = {
            cantor: document.getElementById("cantor").value,
            album: document.getElementById("album").value,
            musica: document.getElementById("musica").value
        };

        lista_cantores.push(objeto_cantor);
        localStorage.setItem("cantores", JSON.stringify(lista_cantores));

        createElement(objeto_cantor, lista_cantores.length - 1);

        form.reset();
    });

    function createElement(objeto_cantor, index) {
        const grammy = document.createElement("div");
        grammy.innerHTML = `
            <h2 class="singer">${objeto_cantor.cantor}</h2>
            <br>
            <p>album mais roxeda: ${objeto_cantor.album}</p>
            <br>
            <p>aquela pedrada: ${objeto_cantor.musica}</p>
        `;
        grammy.className = "pronto";
        grammy.id = `cantor-${index}`;

        grammy.addEventListener("click", () => {
            window.location.href = `editar.html?index=${index}`;
        });

        container.appendChild(grammy);
    }
});