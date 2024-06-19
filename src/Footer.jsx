import { useState } from 'react';
import emailjs from 'emailjs-com';
import './App.css'; // Import custom CSS for footer styling

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_imojp2i', 'template_cb19p5k', formData, 'PUHlyKsNFEnoQvLkj')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        // Clear the form after successful submission
        setFormData({
          name: '',
          email: '',
          feedback: ''
        });
      })
      .catch((error) => {
        console.error('FAILED...', error);
      });
  };

  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Contact Information</h5>
            <p><strong>Name:</strong> Vansh Prajapati</p>
            <p><strong>Email:</strong> <a href="mailto:Vanshprajapati115@gmail.com" className="text-light">Vanshprajapati115@gmail.com</a></p>
            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/vp115" className="text-light" target="_blank" rel="noopener noreferrer">Vansh Prajapati</a></p>
            <p><strong>GitHub:</strong> <a href="https://github.com/VANSHPRAJAPATI115" className="text-light" target="_blank" rel="noopener noreferrer">Vansh Prajapati</a></p>
          </div>
          <div className="col-md-6">
            <h5>Send Feedback</h5>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label text-light">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label text-light">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="feedback" className="form-label text-light">Feedback</label>
                <textarea
                  className="form-control"
                  id="feedback"
                  name="feedback"
                  rows="3"
                  value={formData.feedback}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-light">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
