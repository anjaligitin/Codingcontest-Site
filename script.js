let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((v) => {
  return v.json()
}).then((contests) => {
  console.log(contests)
  ihtml = ""
  for (item in contests) {
    console.log(contests[item])
    ihtml += `
    <div class="card mx-4" style="width: 18rem;margin:10px">
              <img src="https://source.unsplash.com/1170x780/?code,python,coding" class="card-img-top" 
                     alt="...">
              <div class="card-body">
                  <h5 class="card-title">${contests[item].name}</h5>
                  <p class="card-text">Status is ${contests[item].status}</p>
                  <p class="card-text">In 24 hours?${contests[item].in_24_hours}</p>
                  <p class="card-text">The Site is ${contests[item].site}</p>
                  <p>Starts at:${contests[item].start_time}
                  <p>Starts at:${contests[item].end_time}
                  <a href="#" class="btn btn-primary">Visit Page</a>
              </div>
        </div>

    <div class="card mx-4" style="width: 18rem;margin:10px">
              <img src="https://source.unsplash.com/1170x780/?code,laptop,mac" class="card-img-top" 
                     alt="...">
              <div class="card-body">
                  <h5 class="card-title">${contests[item].name}</h5>
                  <p class="card-text">Status is ${contests[item].status}</p>
                  <p class="card-text">In 24 hours?${contests[item].in_24_hours}</p>
                  <p class="card-text">The Site is ${contests[item].site}</p>
                  <p>Starts at:${contests[item].start_time}
                  <p>Starts at:${contests[item].end_time}
                  <a href="#" class="btn btn-primary">Visit Page</a>
              </div>
        </div>

    <div class="card mx-4" style="width: 18rem;margin:10px">
              <img src="https://source.unsplash.com/1170x780/?onlinegaming" class="card-img-top" 
                     alt="...">
              <div class="card-body">
                  <h5 class="card-title">${contests[item].name}</h5>
                  <p class="card-text">Status is ${contests[item].status}</p>
                  <p class="card-text">In 24 hours?${contests[item].in_24_hours}</p>
                  <p class="card-text">The Site is ${contests[item].site}</p>
                  <p>Starts at:${contests[item].start_time}
                  <p>Starts at:${contests[item].end_time}
                  <a href="#" class="btn btn-primary">Visit Page</a>
              </div>
        </div>
    `
  }
  cardContainer.innerHTML = ihtml
})