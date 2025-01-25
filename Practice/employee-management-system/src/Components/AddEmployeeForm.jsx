import React, { useState } from "react";

const AddEmployeeForm = ({ onEmployeeAdded }) => {
  const [formData, setFormData] = useState({ name: "", designation: "", department: "IT" });

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/employees", formData);

      onEmployeeAdded(response.data);
      setFormData({ name: "", designation: "", department: "IT" });
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-employee-form">
      <input name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" required />
      <input name="designation" value={formData.designation} onChange={handleInputChange} placeholder="Designation" required />
       <button type="submit">Add Employee</button>
    </form>
  );
};

export default AddEmployeeForm;
