const Resume = () => {
    return (
        <section id="resume" className="resume">
        <div className="container">
          <div className="section-title">
            <h2>Resume</h2>
          </div>
          <div className="row">
            
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h3 className="resume-title">Experience</h3>
              <div className="resume-item">
                <h4>Junior Software Engineer at PT Inamart Sukses Jaya.</h4>
                <h5>September 2023 – Januari 2025</h5>
                <p>
                  <em
                    >Jakarta, Indonesia</em
                  >
                </p>
                <ul>
                  <li>
                    Developed a web-based Content Management System (CMS) for the Better Muslim application using Next.js and MySQL.
                  </li>
                  <li>Developed the Better Muslim application as Quality Control (QC).</li>
                  <li>Designed the UI of the Better Muslim application using Figma.</li>
                  <li>Designed the UI of the Blockchain PLN EPI application using Figma</li>
                  <li>Developed the Blockchain PLN EPI application using the Laravel framework</li>
                  <li>Developed the DAMAI BPJS Kesehatan application using Angular for the UI, Next.js for the API, and Python as the compute engine</li>
                  <li>Designed the UI of the Select Quantify Compose (SQC) application using Figma.</li>
                  <li>Assisted in developing the GeoKKP application for the National Land Agency (BPN).</li>
                  <li>Assisted in developing the Angkasa Pura 2 (AP2) application.</li>
                  <li>Assisted in developing the Angkasa Pura Aviation (AP Aviation) application.</li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>Web Developer Internship at PT Sembilan Sembilan Media.</h4>
                <h5>August - October 2022</h5>
                <p>
                  <em
                    >Bogor, Indonesia</em
                  >
                </p>
                <ul>
                  <li>
                    leading the development of a project for my fieldwork
                    partner
                  </li>
                  <li>working on a project using codeigniter 4 and MongoDB</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up">
              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>SMKS Wikrama 1 Garut</h4>
                <h5>2020 - 2023</h5>
                <p><em>Vocational High School</em></p>
                <p>
                  Major Software Engineering / Rekayasa Perangkat Lunak (RPL)
                </p>
              </div>
              
              <h3 className="resume-title">Sertification</h3>
              <div className="resume-item pb-0">
                <ul>
                    <li>TOEIC 2021, SMK Wikrama 1 Garut, Score: 505</li>
                    <li>Dicoding Web Programming Basics course, 2023 & 2024</li>
                    <li>Dicoding JavaScript Programming Basics course, 2024</li>
                    <li>Sertification Certiport, 2023</li>
                    <li>2nd Place in the Student Competency Competition (LKS) of Garut District with the theme "IT SOLUTION FOR BUSINESS" using VB .Net (2022)</li>
                    <li>Best Result in the Competency Test, SMK Wikrama 1 Garut</li>
                </ul>
              </div>
            </div>
          </div>
        <div className="float-end p-2">
            <a href="assets/pdf/CV Naufal Ghafir Ramadhan.pdf" download="CV_Naufal_Ghafir_Ramadhan.pdf" target="_blank" className="btn btn-primary btn-m"><i className="bx bxs-printer"></i> Download CV</a>
        </div>
        </div>
      </section>
    )
}

export default Resume;