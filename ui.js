class UI {

    static addFilmToUi(newFilm) {

        const filmList = document.getElementById("films")

        filmList.innerHTML += `
        
        <tr class="text-center mt-auto mb-auto">
            <td style="border: .5px solid gray" ><img src="${newFilm.url}" class="text-center img-fluid img-thumbnail"></td>
            <td style="border: .5px solid gray" >${newFilm.title}</td>
            <td  style="border: .5px solid gray" >${newFilm.director}</td>
            <td> <a href="#" id="delete-film" class="btn btn-danger">Remove</a></td>
        </tr> 

        `;
    }

    static deleteFilmFromUi(aEtiketi) {
        aEtiketi.parentElement.parentElement.remove()
    }

    static loadAllFilms(films) {
        const filmList = document.getElementById("films");  //html alanındaki films id sine sagip kısımda görğntülenecek olan filmler için film objesini tanımlıyoruz.
        films.forEach(function (film) {  // films objesi ile film arrayinin içinde foreach yardımıyla dolaşıyoruz
            //filmlist in içine eklenerek tbody de filmleri görüntüledik        
            filmList.innerHTML += `
            <tr class="text-center mt-auto mb-auto">
            <td style="border: .5px solid gray" ><img src="${film.url}" class="text-center img-fluid img-thumbnail"></td>
            <td style="border: .5px solid gray" >${film.title}</td>
            <td  style="border: .5px solid gray" >${film.director}</td>
            <td> <a href="#" id="delete-film" class="btn btn-danger">Remove</a></td>
            </tr> `
                ;

        })
    }

    static clearInput(element1, element2, element3) {  //burada elemnt diye atadığımız parametreleri, project.js de titleElemnt,DirectorElement ve urlELement olarak atadık. 
        element1.value = ""
        element2.value = ""
        element3.value = ""
    }

    static displayMessage(message, type) {  // bu taslağı hata veya bilgilendirme mesajı oluşturmak istediğimiz her yerde kullanabilriz.


        const div = document.createElement("div")

        div.className = `alert alert-${type}`
        div.style = "margin-top:10px"
        div.textContent = message;
        form.appendChild(div);

        setTimeout(function () {
            div.remove();
        }, 2000)
    }
    static clearAllFilmsFromUi() {
        const filmList = document.getElementById("films") // html üseirnde oluşturduğumuz tbody deki film listesine ulaştık.
         
        while (filmList.firstElementChild !== null) {  // tbody deki films lerde td olaark eklenen filmler tbody nin child i olduğu için silme işlemini bu childelara ulaşarak gerçekleştrieceğiz. Filmlist de child olduğu sürece bu döngü devam ederek child lar silincek. ne zaman ki null döndüyse, yani child kalmadıysa döngüden çıkılacak. 
            filmList.firstElementChild.remove();
        }

    }
}