import React, { useState } from "react";

export default function Contact() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contact);

    alert("Message Sent Successfully!");

    setContact({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-5">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-center text-blue-700 mb-2">
          Contact Us
        </h1>

        <p className="text-center text-gray-600 mb-10">
          Have any questions? We'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Information */}

          <div className="bg-white shadow-lg rounded-xl p-8">

            <h2 className="text-2xl font-bold mb-6 text-blue-600">
              Get In Touch
            </h2>

            <div className="space-y-6">

              <div>
                <h3 className="font-semibold text-lg">📍 Address</h3>
                <p className="text-gray-600">
                  GRAStech sector 3, Noida
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">📧 Email</h3>
                <p className="text-gray-600">
                  placementportal@gmail.com
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">📞 Phone</h3>
                <p className="text-gray-600">
                  +91 6389187143
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">🕒 Office Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday
                </p>
                <p className="text-gray-600">
                  9:00 AM - 6:00 PM
                </p>
              </div>

            </div>
          </div>

          {/* Contact Form */}

          <div className="bg-white shadow-lg rounded-xl p-8">

            <h2 className="text-2xl font-bold mb-6 text-blue-600">
              Send Us a Message
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                value={contact.name}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={contact.email}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={contact.subject}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Write Your Message..."
                value={contact.message}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              ></textarea>

              <button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}
