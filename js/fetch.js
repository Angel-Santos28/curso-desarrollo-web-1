//ejercicio1 Realizar una página web donde se cree un nuevo elemento que contenga características de un producto, persona.

const lista = document.querySelector('#listado');

fetch('https://jsonplaceholder.typicode.com/users')
    .then( (res) => res.json())
    .then( (data) => {
        data.forEach((producto) => {
            const div = document.createElement('tr');
            div.innerHTML = `
            <td>${producto.id}</td>
            <td>${producto.name}</td>
            <td>${producto.username}</td>
            <td>${producto.email}</td>
            `
            lista.append(div)
        })
    })

//ejercicio2 Simula el pedido a una API local (ruta relativa), para esto vas a necesitar hacer un archivo.json con el formato debido de un JSON, puedes utilizar cualquier información.

const listaUsuarios = document.querySelector('#listaUsuarios');

fetch('../AJAX/data.json')
    .then( (res) => res.json())
    .then( (data) => {
        data.forEach((usuarios) => {
            const div = document.createElement('tr');
            div.innerHTML = `
            <td>${usuarios.id}</td>
            <td>${usuarios.nombre}</td>
            <td>${usuarios.apellido}</td>
            <td>${usuarios.email}</td>
            `
            listaUsuarios.append(div)
        })
    })