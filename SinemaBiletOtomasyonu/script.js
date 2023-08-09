const container = document.querySelector(".container");
const count = document.querySelector("#count");
const amount =document.querySelector("#amount");
const selectMovie= document.querySelector("#movie");
const seat = document.querySelectorAll(".seat:not(.reserved");



container.addEventListener("click",function(e){

   if(e.target.classList.contains("seat") && !e.target.classList.contains("reserved")){  // classListteki seat olan ve reserved OLMAYAN elementleri alsın
    e.target.classList.toggle("selected"); // toggle ile seçilmeyenleri seç , seçilenleri seçme
    totalAmount();
    
   }  


})

selectMovie.addEventListener("change",function(e){  // film değiştiğinde fiyat bilgisi anında değişsin
  totalAmount();
})



function totalAmount(){

    const selectedSeat =container.querySelectorAll(".seat.selected"); // seçilen koltukları tut
    
    const selectedSeatsArr = []; // seçilen koltuları array e al
    const seatsArr= []; // tüm koltukları array e al

    selectedSeat.forEach(function(seat){  //seçilen koltukları gez 
        selectedSeatsArr.push(seat);  // array e pushla
    })


    seat.forEach(function(seat){  // koltuk listesini gez
        seatsArr.push(seat); // array e pushla
    })

    let selectedSeatIndex =selectedSeatsArr.map(function(seat){  
        return seatsArr.indexOf(seat);
    });
    
    let selectedSeatCounter =selectedSeat.length;   // koltuk sayısının miktarını(uzunluğunu) tut
    count.innerText=selectedSeatCounter;// id si count olan yere seçilen koltuk(bilet sayısını ata)
    amount.innerText=selectedSeatCounter*selectMovie.value; //toplam tutar: koltuk sayısı*bilet(film) fiyatı


    writeLocaleStorage(selectedSeatIndex);



}

    function writeLocaleStorage(index){
        
            localStorage.setItem("selectedSeat",JSON.stringify(index));
            localStorage.setItem("selectedMovieIndex",JSON.stringify(selectMovie.selectedIndex));


    }