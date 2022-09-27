import "./mailList.css";

const MailList = () => {
  return (
    <div className="newsletter-subscribe mt-5 container bg-success p-3">
      <div className="container">
        <div className="intro">
          <h2 className="text-center text-white newsletter">
            You want to join us?
          </h2>
          <p className="text-center text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
          </div>
        <form className="d-flex justify-content-center" method="post">
          <div class="row col-md-6 ">
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Your Email"
              />
            </div>
            <div className="form-group">
              <button className="btn btn-primary" type="button">
                Subscribe{" "}
              </button>
        
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MailList;
