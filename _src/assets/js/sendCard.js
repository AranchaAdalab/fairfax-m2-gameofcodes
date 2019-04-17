'use strict';

const nuestroObjeto = {
    palette: 1,
    name: 'Maria',
    job: 'frontend',
    phone: '66666666',
    email: 'maria@gmail.com',
    linkedin: 'mariagar',
    github: 'mariagar',
    photo: base64
}


fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    headers: {
        "content-Type": "application/json",
    },
    body: JSON.stringify(nuestroObjeto),
})
.then(response => response.json())
.then(data => {
    const urlGenerada = data.cardURL;
    console.log(urlGenerada);
})