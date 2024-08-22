// eslint-disable-next-line react/prop-types
const Contact = ({ contact }) => {
  return (
    <div className="container hero" id={contact}>
      <div className="row d-flex justify-content-center align-items-center">
        {/* Heading */}
        <div className="col-12 text-center">
          <p className="heading">Contact Us</p>
        </div>

        {/* Contact*/}
        <div className="col-lg-6 col-sm-12 d-flex justify-content-between align-items-center">
          <img className="img-fluid" src="./Contact.png" />
        </div>
        <div className="col-lg-6 features col-sm-12 gap-5">
          <form className="row g-3">
            <div className="col-6">
              <label htmlFor="inputEmail" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                aria-label="First name"
              />
            </div>
            <div className="col-6">
              <label htmlFor="inputEmail" className="form-label">
                Last name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                aria-label="Last name"
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputEmail" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="Enter your email address"
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputMessage" className="form-label">
                Message
              </label>
              <textarea
                type="textarea"
                className="form-control"
                id="inputMessage"
                placeholder="Enter your message"
              />
            </div>

            <div className="col-12">
              <button type="submit" className="btn w-25 btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
