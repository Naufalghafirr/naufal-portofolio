import { useEffect, useRef } from "react";

const Skill = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollStep = 1; // Kecepatan scrolling
    const maxScroll = scrollContainer.scrollWidth / 2; // Loop kembali ke awal setelah setengah scroll

    const scrollImages = () => {
      if (scrollAmount >= maxScroll) {
        scrollContainer.scrollLeft = 0; // Scroll kembali ke awal
        scrollAmount = 0;
      } else {
        scrollContainer.scrollLeft += scrollStep; // Lanjutkan scroll
        scrollAmount += scrollStep;
      }
    };

    const interval = setInterval(scrollImages, 20); // Interval lebih cepat untuk scrolling yang lebih halus

    return () => clearInterval(interval); // Cleanup saat unmount
  }, []);

  const skills = [
    { name: "HTML", img: "assets/img/skills/html.png" },
    { name: "CSS", img: "assets/img/skills/css.png" },
    { name: "JavaScript", img: "assets/img/skills/javascript.png" },
    { name: "Next.js", img: "assets/img/skills/nextjs.png" },
    { name: "PHP", img: "assets/img/skills/php.png" },
    { name: "Laravel", img: "assets/img/skills/laravel.png" },
    { name: "MySQL", img: "assets/img/skills/mysql.png" },
    { name: "RestAPI", img: "assets/img/skills/restapi.png" },
    { name: "CodeIgniter 4", img: "assets/img/skills/codeigniter.png" },
    { name: "VB .NET", img: "assets/img/skills/vbnet.png" },
    { name: "Bootstrap", img: "assets/img/skills/bootstrap.png" },
    { name: "MongoDB", img: "assets/img/skills/mongodb.png" },
    { name: "Docker", img: "assets/img/skills/docker.png" },
  ];

  return (
    <section id="skills" className="skills section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
        </div>

        <div
          ref={scrollContainerRef}
          style={{
            display: "flex",
            overflowX: "hidden", // Menyembunyikan scrollbar
            whiteSpace: "nowrap", // Prevent line break
            justifyContent: "center",
            width: "100%",
            padding: "10px 0",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "15px",
            }}
          >
            {/* Tampilkan gambar dan nama skill */}
            {skills.map((skill, index) => (
              <div key={index} style={{ position: "relative", textAlign: "center" }}>
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="skill-item"
                  style={{
                    height: "100px",
                    flexShrink: 0,
                    cursor: "pointer",
                  }}
                />
                <p style={{ marginTop: "10px", fontSize: "14px", fontWeight: "bold" }}>
                  {skill.name}
                </p>
              </div>
            ))}

            {/* Duplikat gambar untuk infinite loop */}
            {skills.map((skill, index) => (
              <div key={`duplicate-${index}`} style={{ position: "relative", textAlign: "center" }}>
                <img
                  src={skill.img}
                  alt={skill.name}
                  style={{
                    height: "100px",
                    flexShrink: 0,
                    cursor: "pointer",
                  }}
                />
                <p style={{ marginTop: "10px", fontSize: "14px", fontWeight: "bold" }}>
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
