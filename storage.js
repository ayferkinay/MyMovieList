class Storage {
   static addFilmToStorage(newF) {  // burad gçnderdiğimiz parametre project.js deki parametre ile aynı olmak zorunda değil
        let films = this.getFilmsFromStorage();  // burda diğer fonksiyonda dönen arrayi çağırarak new filmi arraya eklemek için işlem yapacağız

        films.push(newF);
        localStorage.setItem("films", JSON.stringify(films)) //stringfy işlemi arrayi string gibi gösterek lstoarege e yazdık     //arrayi localstorage e yazma işlemi
    }


    static getFilmsFromStorage() {
        let films;

        if (localStorage.getItem("films") === null) { //films adında key var mı 
            films = [];
        }
        else {
            films = JSON.parse(localStorage.getItem("films"))
        }
        return films; //arrayi return ile döndük
    }

    static deleteFilmFromStorage(filmTitle) { //storage dan silmek için önce arraya ulaşıp array üzerinde foreach ile gezinmemiz lazım 
        let films = this.getFilmsFromStorage(); // film arrayini biu fonkisyon ile daha önce çekmiştik onu kullanıyoruz tekrar. 
        films.forEach(function (film, index) { //objemizi ve hangi indexte olduğunu aldık 
            if (film.title === filmTitle) {  //şu an ki objemizin title özelliği gönderdiğimiz title a eşit mi 
                films.splice(index, 1) // films arrayinden splice yardımıyla bu objenin bulunduğu indexten 1 tane elemen sildi 
            }
        })

        //arrayin içinden objeyi sildik fakat array olarak storage ile baplantı kuramadığımız için bunu stringe çevirdik. 
        localStorage.setItem("films", JSON.stringify(films))

    }

    static clearAllFilmsFromStorage() {
        localStorage.removeItem("films") // removeitem ile films key ' ini direkt storage den silerek filmleri temziledik 
    }
}

