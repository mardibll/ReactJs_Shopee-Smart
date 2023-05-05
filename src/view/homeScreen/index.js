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
import UsesWindows from "../../component/UsesWindows";
const Home = () => {
  const windowSize = UsesWindows();
  const settings = {
    // dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const slideritem = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          {/* <div
            style={{
              position: "absolute",
              color: "white",
              top: 170,
              paddingLeft: 300,
              zIndex: 9999,
            }}
          >
            <h1>WE SERVE BETTER</h1>
            <h2>CV. ONE MEDIA SOLUTION</h2>
            <h3 style={{ letterSpacing: 10 }}>IT SUPPORT</h3>
          </div> */}
          <img
            className="image"
            src="https://media.istockphoto.com/id/179517389/id/foto/siswa-belajar-dengan-laptop-di-ruang-kelas.jpg?s=170667a&w=0&k=20&c=Yyr8mAMuRPp-mpRoWAOMHd4oroy6UD6ZaslJd73GesU="
          />
        </div>
        <div>
          {/* <div
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
          </div> */}
          <div>
            <img
              className="image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVp6qP_WW5G2wT6cWslgnBrvUNiB_7dksiXA&usqp=CAU"
            />
          </div>
        </div>
        <div>
          {/* <div
            style={{
              position: "absolute",
              color: "white",
              top: 180,
              paddingLeft: 300,
              zIndex: 9999,
            }}
          >
            <h1 style={{ fontSize: 40 }}>
              GO GLOBAL<br></br>LEBIH MUDAH<br></br>DENGAN WEBSITE
            </h1>
            <h2>Segera Konsoltasi dengan Kami</h2>
          </div> */}
          <img
            className="image"
            src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/03/build_a_website_for_free_-_article_image.jpg"
          />
        </div>
      </Slider>
      {/* <div style={{ flex: 1, justifyContent: "center" }}>
        <Slider {...slideritem}>
          <div>
            <div
              style={{
                justifyContent: "center",
                display: "flex",
                width: 259,
              }}
            >
              <img
                style={{
                  height: 70,
                  width: 70,
                  backgroundColor: "blue",
                  borderRadius: 100,
                  padding: 10,
                  opacity: 0.7,
                }}
                src={adminIg}
                alt="err"
              />
            </div>
            <div
              style={{
                width: 259,
                textAlign: "center",
              }}
            >
              <h4>Admin Instagram</h4>
              <p style={{ fontSize: 13 }}>
                Instagram merupakan bagian dari sarana promosi. Kami hadir
                membantu menyajikan produk/jasa Anda secantik dan semenarik
                mungkin sesuai keinginan Anda
              </p>
            </div>
          </div>
          <div>
            <div
              style={{
                justifyContent: "center",
                display: "flex",
                width: 259,
              }}
            >
              <img
                style={{
                  height: 70,
                  width: 70,
                  backgroundColor: "blue",
                  borderRadius: 100,
                  padding: 10,
                  opacity: 0.7,
                }}
                src={SetupJaringan}
                alt="err"
              />
            </div>
            <div
              style={{
                width: 259,
                textAlign: "center",
              }}
            >
              <h4>Setup Jaringan</h4>
              <p style={{ fontSize: 13 }}>
                Di era digital, Anda ingin selalu terkoneksi dengan rekan kerja
                tanpa harus tatap muka. Kami hadir membantu anda untuk
                menyediakan sarananya sesuai kebutuhan.
              </p>
            </div>
          </div>
          <div>
            <div
              style={{
                justifyContent: "center",
                display: "flex",
                width: 259,
              }}
            >
              <img
                style={{
                  height: 70,
                  width: 70,
                  backgroundColor: "blue",
                  borderRadius: 100,
                  padding: 10,
                  opacity: 0.7,
                }}
                src={services}
                alt="err"
              />
            </div>
            <div
              style={{
                width: 259,
                textAlign: "center",
              }}
            >
              <h4>Services Komputer</h4>
              <p style={{ fontSize: 13 }}>
                Anda merasa terganggu dengan komputer atau laptop yang
                bermasalah saat bekerja Kami hadir bersama tim teknisi
                profesional untuk mengatasi masalah laptop atau komputer Anda.
              </p>
            </div>
          </div>
          <div>
            <div
              style={{
                justifyContent: "center",
                display: "flex",
                width: 259,
              }}
            >
              <img
                style={{
                  height: 70,
                  width: 70,
                  backgroundColor: "blue",
                  borderRadius: 100,
                  padding: 10,
                  opacity: 0.7,
                }}
                src={website}
                alt="err"
              />
            </div>
            <div
              style={{
                width: 259,
                textAlign: "center",
              }}
            >
              <h4>Website</h4>
              <p style={{ fontSize: 13 }}>
                Kami hadir sebagai mitra yang tepat untuk membantu memenuhi
                kebutuhan marketing atau promosi Anda melalui pengembangan
                website ataupun aplikasi berbasi website
              </p>
            </div>
          </div>
          <div>
            <div
              style={{
                justifyContent: "center",
                display: "flex",
                width: 259,
              }}
            >
              <img
                style={{
                  height: 70,
                  width: 70,
                  backgroundColor: "blue",
                  borderRadius: 100,
                  padding: 10,
                  opacity: 0.7,
                }}
                src={adminWeb}
                alt="err"
              />
            </div>
            <div
              style={{
                width: 259,
                textAlign: "center",
              }}
            >
              <h4>Admin Website</h4>
              <p style={{ fontSize: 13 }}>
                Sudah memiliki website, tapi masih sepi pengunjung,sudah saatnya
                menjadikan website Anda lebih menarik, selalu update, tanpa
                mengesampingkan perawatan
              </p>
            </div>
          </div>
        </Slider>
      </div> */}
    </div>
  );
};

export default Home;
// https://dev.to/3sanket3/usewindowsize-react-hook-to-handle-responsiveness-in-javascript-3dcl
