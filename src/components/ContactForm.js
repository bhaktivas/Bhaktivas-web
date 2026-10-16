'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 800));

      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({
        name: '',
        email: '',
        subject: 'General Inquiry',
        message: '',
      });
    } catch (err) {
      setStatus({
        submitting: false,
        submitted: false,
        error: 'Failed to send message. Please try emailing support@bhaktivas.com directly.',
      });
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F0E6D8] shadow-xs">
      <div className="mb-6">
        <span className="text-xs font-extrabold text-[#E38B29] uppercase tracking-wider block mb-1">
          Send a Message
        </span>
        <h2 className="text-2xl font-extrabold text-[#3A2E2A]">
          Direct Feedback &amp; Inquiries
        </h2>
        <p className="text-xs sm:text-sm text-[#8B6B4A] mt-1">
          Fill out the form below and our team will get back to you promptly.
        </p>
      </div>

      {status.submitted ? (
        <div className="bg-[#FFF8F0] border-2 border-[#E38B29] rounded-2xl p-6 text-center animate-fadeIn">
          <span className="text-4xl mb-2 block">🙏</span>
          <h3 className="text-lg sm:text-xl font-extrabold text-[#3A2E2A] mb-1">
            Thank You for Reaching Out!
          </h3>
          <p className="text-xs sm:text-sm text-[#5A4E45] max-w-md mx-auto leading-relaxed">
            Your message has been received successfully. We appreciate your feedback and will respond to your email shortly.
          </p>
          <button
            onClick={() => setStatus({ submitting: false, submitted: false, error: null })}
            className="mt-5 px-6 py-2.5 rounded-xl bg-[#3A2E2A] text-white text-xs font-bold hover:bg-[#E38B29] transition-colors"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {status.error && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs font-semibold rounded-xl">
              {status.error}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs font-bold text-[#3A2E2A] uppercase tracking-wider mb-1.5">
                Your Name <span className="text-[#E38B29]">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Rahul Sharma"
                className="w-full px-4 py-3 rounded-xl bg-[#FBF7F0] border border-[#F0E6D8] text-sm text-[#3A2E2A] focus:outline-none focus:border-[#E38B29] focus:bg-white transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-bold text-[#3A2E2A] uppercase tracking-wider mb-1.5">
                Email Address <span className="text-[#E38B29]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className="w-full px-4 py-3 rounded-xl bg-[#FBF7F0] border border-[#F0E6D8] text-sm text-[#3A2E2A] focus:outline-none focus:border-[#E38B29] focus:bg-white transition-all"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-xs font-bold text-[#3A2E2A] uppercase tracking-wider mb-1.5">
              Inquiry Type <span className="text-[#E38B29]">*</span>
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-[#FBF7F0] border border-[#F0E6D8] text-sm text-[#3A2E2A] focus:outline-none focus:border-[#E38B29] focus:bg-white transition-all"
            >
              <option value="General Inquiry">General Inquiry</option>
              <option value="App Support / Bug Report">App Support / Bug Report</option>
              <option value="Bhajan or Wallpaper Request">Bhajan or Wallpaper Request</option>
              <option value="Scripture & Content Feedback">Scripture &amp; Content Feedback</option>
              <option value="Partnership & Business">Partnership &amp; Business</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-bold text-[#3A2E2A] uppercase tracking-wider mb-1.5">
              Your Message <span className="text-[#E38B29]">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="How can we assist you with Bhaktivas?"
              className="w-full px-4 py-3 rounded-xl bg-[#FBF7F0] border border-[#F0E6D8] text-sm text-[#3A2E2A] focus:outline-none focus:border-[#E38B29] focus:bg-white transition-all resize-y"
            />
          </div>

          <button
            type="submit"
            disabled={status.submitting}
            className="w-full py-3.5 px-6 rounded-2xl bg-[#E38B29] hover:bg-[#c9781d] text-white font-extrabold text-sm shadow-md hover:shadow-lg transition-all disabled:opacity-60 flex items-center justify-center gap-2"
          >
            {status.submitting ? (
              <>
                <span className="animate-spin text-lg">⌛</span>
                <span>Sending Message...</span>
              </>
            ) : (
              <>
                <span>Send Message ➔</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
