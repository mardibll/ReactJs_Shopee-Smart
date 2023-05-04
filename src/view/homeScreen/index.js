import React from "react";
import "./home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import adminIg from "../../asset/adminIg.png";
import SetupJaringan from "../../asset/SetupJaringan.png";
import services from "../../asset/services.png";
import website from "../../asset/website.png";
import adminWeb from "../../asset/adminWeb.png";
const Home = () => {
  const settings = {
    // dots: true,
    autoplay: true,
    infinite: true,
    // slidesToShow: 3,
    slidesToScroll: 1,
  };
  const slideritem = {
    // dots: true,
    autoplay: true,
    infinite: true,
    // slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <div
            style={{
              position: "absolute",
              color: "white",
              top: 250,
              paddingLeft: 300,
              zIndex: 9999,
            }}
          >
            <h1>WE SERVE BETTER</h1>
            <h2>CV. ONE MEDIA SOLUTION</h2>
            <h3 style={{ letterSpacing: 10 }}>IT SUPPORT</h3>
          </div>
          <img
            className="image"
            src="https://media.istockphoto.com/id/179517389/id/foto/siswa-belajar-dengan-laptop-di-ruang-kelas.jpg?s=170667a&w=0&k=20&c=Yyr8mAMuRPp-mpRoWAOMHd4oroy6UD6ZaslJd73GesU="
          />
        </div>
        <div>
          <div
            style={{
              position: "absolute",
              color: "white",
              top: 250,
              paddingLeft: 300,
              zIndex: 9999,
            }}
          >
            <h1>
              Apakah Pekerjaan Anda Terhambat<br></br>Karene Laptop, Komputer,
              atau
              <br></br>Printernya Ngadat
            </h1>
          </div>
          <div>
            <img
              className="image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVp6qP_WW5G2wT6cWslgnBrvUNiB_7dksiXA&usqp=CAU"
            />
          </div>
        </div>
        <div>
          <div
            style={{
              position: "absolute",
              color: "white",
              top: 250,
              paddingLeft: 300,
              zIndex: 9999,
            }}
          >
            <h1 style={{ fontSize: 40 }}>
              GO GLOBAL<br></br>LEBIH MUDAH<br></br>DENGAN WEBSITE
            </h1>
            <h2>Segera Konsoltasi dengan Kami</h2>
          </div>
          <img
            className="image"
            src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/03/build_a_website_for_free_-_article_image.jpg"
          />
        </div>
      </Slider>

      <Slider {...slideritem}>
        <div>
          <img style={{ height: 100, width: 100 }} src={adminIg} alt="err" />
        </div>
        <div>
          <img
            style={{ height: 100, width: 100 }}
            src={SetupJaringan}
            alt="err"
          />
        </div>
        <div>
          <img style={{ height: 100, width: 100 }} src={services} alt="err" />
          <h4>Services Komputer</h4>
          <p>Anda merasa terganggu dengan komputer</p>
          <p>atau laptop yang bermasalah saat bekerja</p>
          <p>Kami hadir bersama tim teknisi profesional</p>
          <p>untuk mengatasi masalah laptop atau</p>
          <p>komputer Anda</p>
        </div>
        <div>
          <img style={{ height: 100, width: 100 }} src={website} alt="err" />
          <h4>Website</h4>
          <p>Kami hadir sebagai mitra yang tepat untuk</p>
          <p>membantu memenuhi kebutuhan</p>
          <p>marketing atau promosi Anda melalui</p>
          <p>pengembangan website ataupun aplikasi</p>
          <p>berbasi website</p>
        </div>
        <div>
          <img style={{ height: 100, width: 100 }} src={adminWeb} alt="err" />
        </div>
      </Slider>
    </div>
  );
};

export default Home;
