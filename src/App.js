// src/App.js
import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interests: [],
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => {
        const interests = checked
          ? [...prev.interests, value]
          : prev.interests.filter((i) => i !== value);
        return { ...prev, interests };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <h1>Welcome to My Portfolio</h1>

      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <fieldset>
            <legend>Select your interests:</legend>
            <label>
              <input
                type="checkbox"
                name="interests"
                value="tech"
                onChange={handleChange}
                checked={formData.interests.includes("tech")}
              />
              Tech
            </label>
            <label>
              <input
                type="checkbox"
                name="interests"
                value="design"
                onChange={handleChange}
                checked={formData.interests.includes("design")}
              />
              Design
            </label>
            <label>
              <input
                type="checkbox"
                name="interests"
                value="marketing"
                onChange={handleChange}
                checked={formData.interests.includes("marketing")}
              />
              Marketing
            </label>
          </fieldset>

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <h2>
            Thank you, {formData.name}! Your signup is complete.
          </h2>
          <p>
            Your selected interests: {formData.interests.join(", ")}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
