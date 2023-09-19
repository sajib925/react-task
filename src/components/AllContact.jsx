import React, { useEffect, useState } from "react";

const AllContact = () => {
  const [contacts, setContacts] = useState([]);
  const [showEvenIds, setShowEvenIds] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://contact.mediusware.com/api/contacts/"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setContacts(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const filteredContacts = showEvenIds
    ? contacts.filter((item) => item.id % 2 === 0)
    : contacts;

  const handleCheckboxChange = (e) => {
    setShowEvenIds(e.target.checked);
  };

  return (
    <div className="mt-5">
      <div className="mb-5">
        <input
          type="checkbox"
          id="scales"
          name="scales"
          onChange={handleCheckboxChange}
        />
        <label htmlFor="scales">Show Even IDs</label>
      </div>
      <div className="d-flex align-items-center justify-content-center flex-wrap gap-3">
        {filteredContacts.map((item) => (
          <div
            className="card"
            key={item.id}
            style={{ width: "200px", padding: "10px" }}
          >
            <h6 className="card-title">{item.country.name}</h6>
            <p className="card-text">{item.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllContact;
