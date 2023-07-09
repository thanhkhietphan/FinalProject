let useAPICamping = document.getElementsByClassName("useAPICamping")

fetch("../json/camping.json")
    .then((response) => response.json())
    .then((data) => {
        for (i = 0; i < data.length; i++) {
            for (j = 0; j < useAPICamping.length; j++) {
                useAPICamping[j].innerHTML += `


                 <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                 <div class="package-item">
                     <div class="overflow-hidden">
                         <img class="img-fluid" src=" ${data[i].image}" alt="">
                     </div>
                     <div class="d-flex border-bottom">
                         <small class="flex-fill text-center border-end py-2"><i
                                 class="fa fa-map-marker-alt text-primary me-2"></i>${data[i].contry}</small>
                         <small class="flex-fill text-center border-end py-2"><i
                                 class="fa fa-calendar-alt text-primary me-2"></i>${data[i].day}</small>
                         <small class="flex-fill text-center py-2"><i class="fa fa-user text-primary me-2"></i>${data[i].quantity}</small>
                     </div>
                     <div class="text-center p-4">
                         <h3 class="mb-0">${data[i].price}</h3>
                         <div class="mb-3">
                             <small class="fa fa-star text-primary"></small>
                             <small class="fa fa-star text-primary"></small>
                             <small class="fa fa-star text-primary"></small>
                             <small class="fa fa-star text-primary"></small>
                             <small class="fa fa-star text-primary"></small>
                         </div>
                         <p>${data[i].description}</p>
                         <div class="d-flex justify-content-center mb-2">
                             <a href="#" class="btn btn-sm btn-primary px-3 border-end"
                                 style="border-radius: 30px 0 0 30px;">Read More</a>
                             <a href="#" class="btn btn-sm btn-primary px-3"
                                 style="border-radius: 0 30px 30px 0;">Book Now</a>
                         </div>
                     </div>
                 </div>
             </div>
         
            `
            }
        }
    })


