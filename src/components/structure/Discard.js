
const Testimonial = () => {
    return (
      
          <div class="container-fluid">
            <div class="row pb-4">
              <div class="col-12 text-center pb-3">
                <h2>Testimonials</h2>
              </div>
              <div class="col-sm-10 col-xl-6 mx-auto">
                <div id="myCarousel" class="carousel slide" data-ride="carousel">
                  <div class="carousel-inner text-center px-5">
                    <div class="carousel-item active px-2">
                      <div class="img-box">
                        <img src="./assets/img/client1.png" alt="" />
                        <p class="testimonial pt-4 px-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                          eu sem tempor, varius quam at, luctus dui. Mauris magna
                          metus, dapibus nec turpis vel, semper malesuada ante. Idac
                          bibendum scelerisque non non purus. Suspendisse varius nibh
                          non aliquet.
                        </p>
                        <p class="blockquote-footer">
                          <cite title="Source Title">Sven Holtz</cite>
                        </p>
                      </div>
                    </div>
                    <div class="carousel-item px-2">
                      <div class="img-box">
                        <img src="img/client2.png" alt="" />
                        <p class="testimonial pt-4 px-3">
                          Vestibulum quis quam ut magna consequat faucibus.
                          Pellentesque eget nisi a mi suscipit tincidunt. Utmtc tempus
                          dictum risus. Pellentesque viverra sagittis quam at mattis.
                          Suspendisse potenti. Aliquam sit amet gravida nibh,
                          facilisis gravida odio.
                        </p>
                        <p class="blockquote-footer">
                          <cite title="Source Title">Mia Yang</cite>
                        </p>
                      </div>
                    </div>
                    <div class="carousel-item px-2">
                      <div class="img-box">
                        <img src="img/client3.png" alt="" />
                        <p class="testimonial pt-4 px-3">
                          Phasellus vitae suscipit justo. Mauris pharetra feugiat ante
                          id lacinia. Etiam faucibus mauris id tempor egestas. Duis
                          luctus turpis at accumsan tincidunt. Phasellus risus risus,
                          volutpat vel tellus ac, tincidunt fringilla massa dolor
                          hendrerit.
                        </p>
                        <p class="blockquote-footer">
                          <cite title="Source Title">Abigail Martinez</cite>
                        </p>
                      </div>
                    </div>
  
                    <ol class="carousel-indicators">
                      <li
                        data-target="#myCarousel"
                        data-slide-to="0"
                        class="active"
                      ></li>
                      <li data-target="#myCarousel" data-slide-to="1"></li>
                      <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>
  
                    <a
                      class="carousel-control-prev"
                      href="#myCarousel"
                      data-slide="prev"
                      title="prvSlide"
                    >
                      <i class="fa fa-angle-left"></i>
                    </a>
                    <a
                      class="carousel-control-next"
                      href="#myCarousel"
                      data-slide="next"
                      title="nextSlide"
                    >
                      <i class="fa fa-angle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
  };