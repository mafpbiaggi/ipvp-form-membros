function confirmaEnvio() {
    if (confirm("Tem certeza que deseja enviar os dados? Caso queira revisar os campos, clique em CANCELAR.")) {
        return true;
    } else {
        return false;
    }
}

const formMembro = document.getElementById("formMembro");
const divAlerta = document.getElementById("divAlerta");
const msgAlerta = document.getElementById("msgAlerta");
divAlerta.className = "";
msgAlerta.innerHTML = "";

if (formMembro) {
    formMembro.addEventListener("submit", async (e) => {
        if (!confirmaEnvio()) {
            e.preventDefault();
            return;
        }

        e.preventDefault();
        const dadosForm = new FormData(formMembro);

        const dados = await fetch("app.php", {
            method: "POST",
            body: dadosForm
        });

        const resposta = await dados.json();

        if (resposta['status']) {
            divAlerta.className = "alert alert-success";
            msgAlerta.innerHTML = resposta['msg'];
            formMembro.reset();
        } else {
            divAlerta.className = "alert alert-danger";
            msgAlerta.innerHTML = resposta['msg'];
        }
    });
}
