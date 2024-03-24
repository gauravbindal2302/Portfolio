import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; // Import serverTimestamp
import { db } from "./../../firebase"; // Parent directory se firebase.js ko import karna

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataWithTimestamp = {
        ...formData,
        timestamp: serverTimestamp(), // Add current timestamp
      };
      await addDoc(collection(db, "contacts"), formDataWithTimestamp);
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Error submitting form. Please try again later.");
    }
  };

  return (
    <section
      className="contact-page h-screen w-screen flex items-center lg:pt-16 lg:px-12 gap-4"
      id="contact"
    >
      <div className="contact-left w-1/2 h-full flex flex-col justify-center items-center">
        <div className="contact-left-items text-lg">
          <h2 className="text-4xl font-bold mb-4">Contact</h2>
          <p className="text-gray-700 mb-2 flex gap-2">
            Social:
            <a href="#">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </p>
          <p className="text-gray-700 mb-2">
            <a href="mailto:gb2302bindal@gmail.com">
              Email: gb2302bindal@gmail.com
            </a>
          </p>
          <p className="text-gray-700 mb-2">Phone: +91-8789568975</p>
        </div>
      </div>
      <div className="w-1/2 h-full flex items-center lg:px-4">
        <form className="flex flex-wrap -mx-2" onSubmit={handleSubmit}>
          <div className="w-full px-2 mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Your Name"
            />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Your Email"
            />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-700 font-bold mb-2"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Your Phone Number"
            />
          </div>
          <div className="w-full px-2 mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded resize-none"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="w-full px-2 mb-4">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
