let useAPIMenu = document.getElementsByClassName("useAPIMenu")

fetch("../json/menu.json")
    .then((response) => response.json())
    .then((data) => {
        for (i = 0; i < data.length; i++) {
            for (j = 0; j < useAPIMenu.length; j++) {
                useAPIMenu[j].innerHTML += `
                <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="service-item rounded pt-3">
                        <div class="p-4">
                            <i class="${data[i].icon}"></i>
                            <h5>${data[i].title}</h5>
                            <p>${data[i].description}</p>
                        </div>
                    </div>
                </div>
            `
            }
        }
    })