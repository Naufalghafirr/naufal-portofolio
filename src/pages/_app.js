import Header from '../components/header';
import Footer from '../components/footer';
import { useEffect } from 'react';
import { Container } from "@chakra-ui/react"
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Menambahkan skrip secara manual di body setelah komponen dimuat
    const scripts = [
      'assets/vendor/purecounter/purecounter_vanilla.js',
      'assets/vendor/aos/aos.js',
      'assets/vendor/bootstrap/js/bootstrap.bundle.min.js',
      'assets/vendor/glightbox/js/glightbox.min.js',
      'assets/vendor/isotope-layout/isotope.pkgd.min.js',
      'assets/vendor/swiper/swiper-bundle.min.js',
      'assets/vendor/typed.js/typed.min.js',
      'assets/vendor/waypoints/noframework.waypoints.js',
      'assets/js/main.js'
    ];

    // Menambahkan skrip ke dalam body secara dinamis
    scripts.forEach((src) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    });

    // Cleanup untuk menghapus skrip saat komponen di-unmount
    return () => {
      scripts.forEach((src) => {
        const script = document.querySelector(`script[src="${src}"]`);
        if (script) {
          document.body.removeChild(script);
        }
      });
    };
  }, []);

  return (
    <>
    <Head>
    <link rel="icon" href="assets/img/icon.png" />

    {/* css assets */}
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />
    <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
    <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
    <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet"/>
    <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
    <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet"/>
    <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
    <link href="assets/css/style.css" rel="stylesheet" />


    {/* js assets */}
    <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
    <script src="assets/vendor/aos/aos.js"></script>
    <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
    <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
    <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
    <script src="assets/vendor/typed.js/typed.min.js"></script>
    <script src="assets/vendor/waypoints/noframework.waypoints.js"></script>

    {/* Template Main JS File */}
    <script src="assets/js/main.js"></script>
    </Head>
      <Header />
      <Component {...pageProps} />
      {/* <Footer /> */}
    </>
  );
}

export default MyApp;
