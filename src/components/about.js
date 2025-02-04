const About = () => {
  const abouts = [
    [
      "Email","naufalghafir123@gmail.com"
    ],[
      "Phone","+62 813-9899-5752"
    ],[
      "Address", "Depok, West Java, Indonesia"
    ]
  ];
    return (
        <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <h2>About Me</h2>
            <p>
            I am a junior software engineer with over one year of experience in application development. I have expertise in designing efficient, scalable, and high-performance systems. With relevant certifications in application development, I am committed to delivering innovative and high-quality technology solutions.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img src="assets/img/my-profile.jpg" className="img-fluid rounded" alt="profile" />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>Naufal Ghafir Ramadhan</h3>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    {abouts.map((item, index) => (
                      <li key={index}>
                      <i className="bi bi-chevron-right"></i>
                      <strong>{item[0]}:</strong>
                      <span>{item[1]}</span>
                    </li>
                    ))}
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    {/* isi buat dikanan */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default About;