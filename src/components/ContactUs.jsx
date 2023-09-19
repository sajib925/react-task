import React, { useEffect, useState } from "react";

export const ContactUs = () => {
  const [contacts, setContacts] = useState([]);
  const [showEvenIds, setShowEvenIds] = useState(false);

  useEffect(() => {
    fetch(
      "https://contact.mediusware.com/api/country-contacts/United%20States/"
    )
      .then((response) => response.json())
      .then((data) => {
        setContacts(data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const filteredContacts = showEvenIds
    ? contacts.filter((item) => item.id % 2 === 0)
    : contacts;

  const handleCheckboxChange = (e) => {
    setShowEvenIds(e.target.checked);
  };

  return (
    <div className="">
      <div className="mb-5">
        <div>
          <input
            type="checkbox"
            id="scales"
            name="scales"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="scales">Show Even IDs</label>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center flex-wrap gap-3">
        {filteredContacts.map((item) => (
          <div
            className="card"
            key={item.id}
            style={{ width: "150px", padding: "10px" }}
          >
            <h6 className="card-title">{item.country.name}</h6>
            <p className="card-text">{item.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
