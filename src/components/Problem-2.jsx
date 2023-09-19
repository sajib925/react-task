import React, { useEffect, useState } from "react";
import "./problem2.scss";
import AllContact from "./AllContact";
import { ContactUs } from "./ContactUs";

const Problem2 = () => {
  const [allContactModal, setAllcontactModal] = useState(false);
  const [contactUsModal, setContactUsModal] = useState(false);

  const openAllContactsModal = () => {
    setAllcontactModal(true);
    setContactUsModal(false);
  };

  // Function to close the "All Contacts" modal
  const closeAllContactsModal = () => {
    setAllcontactModal(false);
    setContactUsModal(false);
  };

  // Function to open the "Contact Us" modal
  const openContactUsModal = () => {
    setContactUsModal(true);
    setAllcontactModal(false);
  };

  return (
    <div className="container">
      <div className="row justify-content-center my-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          {/* Button to open the "All Contacts" modal */}
          <button
            className="btn btn-lg btn-outline-primary"
            type="button"
            onClick={openAllContactsModal}
          >
            All Contacts
          </button>

          {/* Button to open the "Contact Us" modal */}
          <button
            className="btn btn-lg btn-outline-warning"
            type="button"
            onClick={openContactUsModal}
          >
            Contact Us
          </button>
        </div>
      </div>

      {allContactModal && (
        <div className="my-5">
          <div className="d-flex justify-content-center gap-3 my-5">
            {/* Button to open the "All Contacts" modal */}

            <button
              className="btn btn-lg btn-outline-primary"
              type="button"
              onClick={openAllContactsModal}
            >
              All Contacts
            </button>

            {/* Button to open the "Contact Us" modal */}
            <button
              className="btn btn-lg btn-outline-warning"
              type="button"
              onClick={openContactUsModal}
            >
              Contact Us
            </button>
            <button
              className="btn btn-secondary"
              onClick={closeAllContactsModal}
            >
              Close
            </button>
          </div>

          <h1 className="text-center my-5">Modal A</h1>
          <AllContact />
        </div>
      )}

      {contactUsModal && (
        <div className="">
          <div className="d-flex justify-content-center gap-3 my-5">
            {/* Button to open the "All Contacts" modal */}
            <button
              className="btn btn-lg btn-outline-primary"
              type="button"
              onClick={openAllContactsModal}
            >
              All Contacts
            </button>

            {/* Button to open the "Contact Us" modal */}
            <button
              className="btn btn-lg btn-outline-warning"
              type="button"
              onClick={openContactUsModal}
            >
              Contact Us
            </button>
            <button
              className="btn btn-secondary"
              onClick={closeAllContactsModal}
            >
              Close
            </button>
          </div>
          <h1 className="text-center mb-5">Modal B</h1>
          <ContactUs />
        </div>
      )}
    </div>
  );
};

export default Problem2;
