let useAPIProcess = document.getElementsByClassName("useAPIProcess")

fetch("../json/process.json")
    .then((response) => response.json())
    .then((data) => {
        for (i = 0; i < data.length; i++) {
            for (j = 0; j < useAPIProcess.length; j++) {
                useAPIProcess[j].innerHTML += `
                



                <div class="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="position-relative border border-primary pt-5 pb-4 px-4">
                        <div class="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                            style="width: 100px; height: 100px;">
                            <i class="${data[i].icon}"></i>
                        </div>
                        <h5 class="mt-4">${data[i].title}</h5>
                        <hr class="w-25 mx-auto bg-primary mb-1">
                        <hr class="w-50 mx-auto bg-primary mt-0">
                        <p class="mb-0">${data[i].description}</p>
                    </div>
                </div>
            `
            }
        }
    })