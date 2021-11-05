let variabel = [{makanan : "Soto", lokasi: "Mampang", Rate: 9.5},{makanan : "Bakso", lokasi: "Duren Sawit", Rate: 10}, {makanan : "Pizza", lokasi: "Menteng", Rate: 9.0}, {makanan : "Sate", lokasi: "Bangli", Rate: 8.5}]

for(let i = 0; i < variabel.length; i++){

  let person = variabel[i]

  let tr = document.createElement('tr')
  tr.setAttribute("class","perPerson")

  let numberTd = document.createElement("td")
  let makananTd = document.createElement("td")
  let lokasiTd = document.createElement("td")
  let ratingTd = document.createElement("td")

  let number = document.createTextNode(i+1)
  let makanan = document.createTextNode(person.makanan)
  let lokasi = document.createTextNode(person.lokasi)
  let rating = document.createTextNode(person.Rate)

  numberTd.appendChild(number)
  makananTd.appendChild(makanan)
  lokasiTd.appendChild(lokasi)
  ratingTd.appendChild(rating)
  

  tr.appendChild(numberTd)
  tr.appendChild(makananTd)
  tr.appendChild(lokasiTd)
  tr.appendChild(ratingTd)

  dashboard.appendChild(tr)
}