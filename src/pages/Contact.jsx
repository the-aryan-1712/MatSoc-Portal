import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLScKGMlx_fU3VkilAAzi4mKEFYgRbRAeLZWuD2AesHpH8xHjbQ/formResponse";

    const formUrlEncoded = new URLSearchParams();
    formUrlEncoded.append("entry.186688397", formData.name);
    formUrlEncoded.append("entry.1662921590", formData.email);
    formUrlEncoded.append("entry.462564474", formData.subject);
    formUrlEncoded.append("entry.2070176118", formData.message);

    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: formUrlEncoded
      });
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Form submission error", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-4">
            Get in Touch
          </h2>
          <p className="max-w-xl mx-auto text-lg text-foreground/70">
            Have questions or want to collaborate? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1 mr-4">
                    <MapPin />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Location</h4>
                    <p className="text-foreground/70 leading-relaxed">
                      Room No.413, 4th Floor,
                      <br />
                      Faculty Building,
                      <br />
                      IIT Kanpur, 208016
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mr-4">
                    <Mail />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <a
                      href="mailto:matsoc@iitk.ac.in"
                      className="text-foreground/70 hover:text-primary transition-colors"
                    >
                      matsoc@iitk.ac.in
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 mr-4">
                    <Phone />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Phone</h4>
                    <a
                      href="tel:+91-8738932371"
                      className="text-foreground/70 hover:text-primary transition-colors"
                    >
                      +91-8738932371
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3 glass p-8 md:p-10 rounded-2xl relative overflow-hidden"
          >
            {/* Form glowing effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full filter blur-[60px] pointer-events-none"></div>

            <form
              className="space-y-6 relative z-10"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="block px-4 pb-2.5 pt-6 w-full text-foreground bg-background/50 rounded-xl border border-white/10 appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all backdrop-blur-sm peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="name"
                    className="absolute text-base text-foreground/80 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 pointer-events-none"
                  >
                    Full Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block px-4 pb-2.5 pt-6 w-full text-foreground bg-background/50 rounded-xl border border-white/10 appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all backdrop-blur-sm peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="email"
                    className="absolute text-base text-foreground/80 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 pointer-events-none"
                  >
                    Email Address
                  </label>
                </div>
              </div>

              <div className="relative">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="block px-4 pb-2.5 pt-6 w-full text-foreground bg-background/50 rounded-xl border border-white/10 appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all backdrop-blur-sm peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="subject"
                  className="absolute text-base text-foreground/80 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 pointer-events-none"
                >
                  Subject
                </label>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="block px-4 pb-2.5 pt-6 w-full text-foreground bg-background/50 rounded-xl border border-white/10 appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all backdrop-blur-sm peer"
                  placeholder=" "
                  required
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute text-base text-foreground/80 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 pointer-events-none"
                >
                  Message
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex justify-center items-center w-full px-6 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-primary hover:bg-primary-hover shadow-lg shadow-primary/30 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : submitStatus === "success" ? (
                  <>Sent Successfully <CheckCircle2 className="w-5 h-5 ml-2" /></>
                ) : submitStatus === "error" ? (
                  "Failed to Send"
                ) : (
                  <>Send Message <Send className="w-5 h-5 ml-2" /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

