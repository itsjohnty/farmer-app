import React, { useState } from "react";
import './Form.css';

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    spouseName: "",
    village: "",
    block: "",
    district: "",
    firstVisitDate: "",
    cropPlanned: "",
    proposedSowingDate: "",
    visits: "",
    popAdopted: "",
    gpsPhoto: ""
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    localStorage.setItem("formData", JSON.stringify(formData));
    window.alert("Form submitted successfully!");
  };

  const handleVisit = e => {
    setFormData({
      ...formData,
      visits: [...formData.visits, e.target.value]
    });
  };

  const handlePopAdopted = e => {
    setFormData({
      ...formData,
      popAdopted: e.target.value
    });
  };

  const handleGpsPhoto = e => {
    setFormData({
      ...formData,
      gpsPhoto: e.target.files[0]
    });
  };

  const handleReset = () => {
    setFormData({
      name: "",
      spouseName: "",
      village: "",
      block: "",
      district: "",
      firstVisitDate: "",
      cropPlanned: "",
      proposedSowingDate: "",
      visits: "",
      popAdopted: "",
      gpsPhoto: ""
    });
  };


  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" onChange={handleChange} />
        <div>
        <label htmlFor="spouseName">Spouse Name:</label>
        <input type="text" id="spouseName" name="spouseName" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="village">Village:</label>
        <input type="text" id="village" name="village" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="block">Block:</label>
        <input type="text" id="block" name="block" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="district">District:</label>
        <input type="text" id="district" name="district" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="firstVisitDate">Date of First Visit:</label>
        <input type="date" id="firstVisitDate" name="firstVisitDate" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="cropPlanned">Crop Planned:</label>
        <input type="text" id="cropPlanned" name="cropPlanned" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="proposedSowingDate">Proposed Date of Sowing:</label>
        <input type="date" id="proposedSowingDate" name="proposedSowingDate" onChange={handleChange} />
</div>
<div>
<label htmlFor="visits">Date of Visits:</label>
<input type="date" id="visits" name="visits" onChange={handleVisit} />
</div>
<div>
<label htmlFor="popAdopted">POP Adopted on that date:</label>
<input type="text" id="popAdopted" name="popAdopted" onChange={handlePopAdopted} />
</div>
<div>
<label htmlFor="gpsPhoto">GPS Photo:</label>
<input type="file" id="gpsPhoto" name="gpsPhoto" onChange={handleGpsPhoto} />
</div>
</div>
<div className="button-container">
<button type="submit" onClick={handleSubmit}>Submit</button>
<button type="button" onClick={handleReset}>
        Reset
      </button>
</div>
</form>
);
}

export default Form;