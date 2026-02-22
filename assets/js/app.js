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

if (divAlerta) divAlerta.className = "";
if (msgAlerta) msgAlerta.innerText = "";

if (formMembro) {
    formMembro.addEventListener("submit", async (e) => {
        if (!confirmaEnvio()) {
            e.preventDefault();
            return;
        }

        e.preventDefault();
        const dadosForm = new FormData(formMembro);

        try {
            const dados = await fetch("app.php", {
                method: "POST",
                body: dadosForm
            });

            const resposta = await dados.json();

            if (resposta['status']) {
                if (divAlerta) divAlerta.className = "alert alert-success";
                if (msgAlerta) msgAlerta.innerText = resposta['msg'];
                formMembro.reset();
            } else {
                if (divAlerta) divAlerta.className = "alert alert-danger";
                if (msgAlerta) msgAlerta.innerText = resposta['msg'];
            }
            
        } catch (error) {
            if (divAlerta) divAlerta.className = "alert alert-danger";
            if (msgAlerta) msgAlerta.innerText = "Erro ao processar envio.\nContate o administrador.";
        }
    });
}
