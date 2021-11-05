let variabel = [{film : "Monster Inc", Rate: 9.5}, {film : "Kungfu Hustle", Rate: 10},{film : "Guilty", Rate: 9.7}]


for(let i = 0; i < variabel.length; i++){

  let person = variabel[i]

  let tr = document.createElement('tr')
  tr.setAttribute("class","perPerson")

  let numberTd = document.createElement("td")
  let filmTd = document.createElement("td")
  let ratingTd = document.createElement("td")

  let number = document.createTextNode(i+1)
  let film = document.createTextNode(person.film)
  let rating = document.createTextNode(person.Rate)

  numberTd.appendChild(number)
  filmTd.appendChild(film)
  ratingTd.appendChild(rating)
  

  tr.appendChild(numberTd)
  tr.appendChild(filmTd)
  tr.appendChild(ratingTd)

  dashboard.appendChild(tr)
}

