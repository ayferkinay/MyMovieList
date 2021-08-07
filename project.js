//Dom Selectors 

const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title")
const directorElement = document.querySelector("#director")
const urlElement = document.querySelector("#url")
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films")


// Tüm Eventleri yazmak için oluşturuluan fonks

allEventListener();

function allEventListener() {
    form.addEventListener("submit", addFilm) // formda submit yapınca çalışacak olan fonks
    document.addEventListener("DOMContentLoaded", function () { // sayfa yüklendiği esnada oluşacak olan eylemler 
        let films = Storage.getFilmsFromStorage();
        UI.loadAllFilms(films)
    })
    cardBody.addEventListener("click", deleteFilm)
    clear.addEventListener("click", clearAllFilms)
}


//Film silme


//  deleteFilm = (e)=>{   //arrow function kabul etmedi 

// console.log(e.target);
// }
// const deleteFilm = (e) => console.log(e.target);

function deleteFilm(e) { //Film silme fonksiyonu
    if (e.target.id === "delete-film") { // silme butonunu tam olarak bulmak için e.target ile tıklanılan butonun delete butonu olup olmadığını kontrol ettik 
        UI.deleteFilmFromUi(e.target); //eğer delete butonu ise UI dan filmi silmek için fonksiyon çağırıp çalıştırıyoruz.
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent); // e. target ile a elemntine yani sil butonuna basınca Storage den silmesi için a etikeitnini parent elementine yani td elemntine ulaşıyoruz. td elementinin 2 önceski kardeşindcen film ismini çekebilmek için previousElementSibling fonksiyonunu 2 kez kullanıyoruz.
        UI.displayMessage("Silme İlemi Gerçekliştirildi", "success")
    }
}


//Yeni film oluşturma alanı 
function addFilm(e) {
    const title = titleElement.value  // mevcut 3 input içindeki değerleri aldık. 
    const director = directorElement.value;
    const url = urlElement.value;

    if (title === "" || director === "" || url === "") {  //Alanalrın boş olup olmadığı kontrol edildi 
        UI.displayMessage("Please be careful not to leave the fields blank. ", "danger")
    }
    else {
        const newFilm = new Movie(title, director, url) // aldığımız verilerden movie objesinden yeni bir film türetme. constructor 3 parametre adlığı için burda da 3 parametre kullandık. 

        UI.addFilmToUi(newFilm); //Arayüze Fİlm Ekleme. Yeni oluşturulan filmi bu objeye paramtere olarak göndererek filmi arayüze ekliyoruz.

        Storage.addFilmToStorage(newFilm)//Storage'a yeni filmi gönderdik 

        UI.displayMessage("The movie, has been successfully added to the list", "success") //Başarılı bir şekilde film eklemesi yapıldıysa çıkacak olan alert

    }

    UI.clearInput(titleElement, directorElement, urlElement); // Fİlm ekleme işlemi ardından ınpıtları temizler
    e.preventDefault();  // formun submit edilmesini önlemek için.
}

function clearAllFilms(e) {

    if (confirm("Silmek istediğinize emin misiniz?")) {
        UI.clearAllFilmsFromUi();
        Storage.clearAllFilmsFromStorage();

    }
}

