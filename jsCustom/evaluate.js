let useAPIEvaluate = document.getElementsByClassName("useAPIEvaluate")

fetch("../json/evaluate.json")
    .then((response) => response.json())
    .then((data) => {
        for (i = 0; i < data.length; i++) {
            for (j = 0; j < useAPIEvaluate.length; j++) {
                useAPIEvaluate[j].innerHTML += `
                <div class="testimonial-item bg-white text-center border p-4" style = "width: 33%">
                    <img class="bg-white rounded-circle shadow p-1 mx-auto mb-3" src="${data[i].image}"
                        style="width: 80px; height: 80px;">
                    <h5 class="mb-0">${data[i].name}</h5>
                    <p>${data[i].contry}</p>
                    <p class="mt-2 mb-0">${data[i].description}</p>
                </div>
            `
            }
        }
    })