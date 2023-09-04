window.onload = function() {
    listAllUsers();
};

function toggleSortIcon(sortImg) {
    if (sortImg.src.includes('arrow-fat-up.svg')) {
        sortImg.src = './icons/arrow-fat-down.svg';
    } else if (sortImg.src.includes('arrow-fat-down.svg')) {
        sortImg.src = './icons/arrow-fat-up.svg';
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const salvarUsuarioButton = document.getElementById("salvarUsuario");

    salvarUsuarioButton.addEventListener("click", function () {
        const userData = {
            firstName: document.getElementById("firstName").value,
            lastName: document.getElementById("lastName").value,
            birthDate: document.getElementById("birthDate").value,
            cpf: document.getElementById("cpf").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
            phoneNumber: document.getElementById("phoneNumber").value,
            genre: document.getElementById("gender").value
        };
        console.log(userData);

        fetch("http://localhost:3333/app/user/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        })
        .then(response => response.json())
        .then(data => {
            console.log("Resposta da API:", data);
            alert("Usuário criado com sucesso!");
        })
        .catch(error => {
            console.error("Erro ao criar usuário:", error);
            alert("Erro ao criar usuário. Verifique os dados e tente novamente.");
        });
    });
});


function listAllUsers() {
    fetch("http://localhost:3333/app/user/all")
        .then(response => response.json())
        .then(users => {
            const table = document.getElementById('tableUsers');
            table.innerHTML = '';

            users.forEach(user => {
                const row = table.insertRow();
                row.innerHTML = `<tr>
                                 <td>${user.id}</td>
                                 <td>${user.email}</td>
                                 <td>${user.firstName}</td>
                                 <td>${user.createdAt}</td>
                                 <td><img src="./icons/dots-three.svg" alt="" /></td>
                                 </tr>`;
            });
        })
        .catch(error => {
            console.error(error);
        });
}
