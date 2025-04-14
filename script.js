document.addEventListener("DOMContentLoaded", () => {
    const santos = {
      "san-expedito": {
        nombre: "San Expedito",
        imagen: "/img/sanExpedito.jpeg",  // Asegúrate de que esta ruta sea válida
        oracion: `Oh, Glorioso San Expedito de las causas justas y urgentes, ayúdanos en nuestra hora de aflicción y desesperación, intercede por mí ante a nuestro señor Jesucristo, tú que eres un santo guerrero, tú que eres el santo de las causas urgentes, tú que alejas a quienes quieren dañarnos, ayúdame, dame fuerzas, coraje y serenidad. Protege a mi familia como lo haces con la juventud, los enfermos, el trabajo, los negocios y juicios . Atiéndeme mi pedido. Atiéndeme con urgencia, por favor devuélveme la paz. Te seré fiel el resto de mi vida y daré a conocer tu nombre a todos los que tienen fe.`
      },
      "san-cayetano": {
        nombre: "San Cayetano",
        imagen: "/img/sanCayetano.jpeg",  // Asegúrate de que esta ruta sea válida
        oracion: `¡Oh glorioso San Cayetano!, acudo a ti en mi necesidad. Tú que tanto ayudas a quienes confían en ti, intercede por mí para que no me falte el pan y el trabajo. Que en mi hogar reine la paz y la fe no decaiga. Te lo pido con el corazón, en el nombre de Jesús. Amén.`
      }
    };
  
    const santoElements = document.querySelectorAll(".santo-name");
    const popup = document.getElementById("popup");
    const fade = document.getElementById("fade");
    const cerrarBtn = document.getElementById("cerrar-btn");
    const infoBtn = document.getElementById("info-btn");
  
    santoElements.forEach(santo => {
      santo.addEventListener("click", () => {
        const id = santo.id;
        const data = santos[id];
        document.getElementById("santo-img").src = data.imagen;
        document.getElementById("santo-title").textContent = data.nombre;
        document.getElementById("oracion-texto").textContent = data.oracion;
        document.getElementById("info-extra").innerHTML = '';
  
        popup.style.display = "flex";
        fade.style.display = "block";
  
        infoBtn.onclick = () => {
          let link = "";
          if (id === "san-expedito") {
            link = "https://es.wikipedia.org/wiki/San_Expedito";
          } else if (id === "san-cayetano") {
            link = "https://es.wikipedia.org/wiki/San_Cayetano";
          }
          window.open(link, "_blank");
        };
      });
    });
  
    cerrarBtn.addEventListener("click", () => {
      popup.style.display = "none";
      fade.style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const imagenes = [
      "img/galeria1.jpeg",
      "img/galeria2.jpeg",
      "img/galeria3.jpeg",
      "img/galeria4.jpeg",
      "img/galeria5.jpeg",
    ];
  
    let indiceActual = 0;
    const galeriaImg = document.getElementById("galeria-img");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
  
    function mostrarImagen(index) {
      galeriaImg.style.opacity = 0;
      setTimeout(() => {
        galeriaImg.src = imagenes[index];
        galeriaImg.style.opacity = 1;
      }, 300);
    }
  
    prevBtn.addEventListener("click", () => {
      indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
      mostrarImagen(indiceActual);
    });
  
    nextBtn.addEventListener("click", () => {
      indiceActual = (indiceActual + 1) % imagenes.length;
      mostrarImagen(indiceActual);
    });
  });
  