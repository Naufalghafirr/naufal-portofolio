import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState(null); // Status untuk notifikasi
  const [loading, setLoading] = useState(false); // Loading state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch('/api/send-mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      
      if (res.ok) {
        setStatus({ type: 'success', message: '✅ Your message has been sent successfully!' });
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        setStatus({ type: 'error', message: '❌ Failed to send message. Please try again later.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: '❌ Something went wrong. Please try again.' });
    }

    setLoading(false);
    
    // Hilangkan notifikasi setelah 5 detik
    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <section id="contact" className="contact section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
        </div>

        <div className="row" data-aos="fade-in">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <a href='https://maps.app.goo.gl/QKZrkDwTjWM25LwM8' target='_blank'>
                    <i className="bi bi-geo-alt"></i>
                    <h4>Location:</h4>
                    <p>Depok, West Java, Indonesia</p>
                </a>
              </div>

              <div className="email">
                <a href='mailto:naufalghafir123@gmail.com'>
                    <i className="bi bi-envelope"></i>
                    <h4>Email:</h4>
                    <p>naufalghafir123@gmail.com</p>
                </a>
              </div>

              <div className="phone">
                <a target='_blank' href='https://wa.me/6281398995752'>
                    <i className='bx bxl-whatsapp'></i>
                    <h4>Whatsapp:</h4>
                    <p>+62-813-9899-5752</p>
                </a>
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.224399102629!2d106.82825301622515!3d-6.400885522141848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f23423423423%3A0x234234234!2zRGVwb2ssIEluZG9uZXNpYQ!5e0!3m2!1sen!2sid!4v1610000000000"
                frameBorder="0"
                style={{ border: '0', width: '100%', height: '290px' }}
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form onSubmit={handleSubmit} className="php-email-form">
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    value={formData.name}
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    value={formData.email}
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  name="message"
                  rows="10"
                  value={formData.message}
                  required
                  onChange={handleChange}
                ></textarea>
              </div>

              {status && (
                <div className={`alert ${status.type === 'success' ? 'alert-success' : 'alert-danger'}`}>
                  {status.message}
                </div>
              )}

              <div className="text-center">
                <button type="submit" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
