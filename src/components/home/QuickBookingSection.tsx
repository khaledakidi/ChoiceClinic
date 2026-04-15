import { useState } from "react";

const QuickBookingSection = () => {
  const [form, setForm] = useState({
    fullName: "",
    service: "",
    date: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi! I'm ${form.fullName}.%0A%0AService: ${form.service}%0APreferred Date: ${form.date}%0AEmail: ${form.email}`;
    window.open(`https://wa.me/905000000000?text=${text}`, "_blank");
  };

  const inputClass =
    "w-full px-4 py-3.5 rounded-md text-sm text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground/70 focus:border-primary";

  const inputStyle = {
    background: "#1a1a1a",
    border: "1px solid rgba(78, 70, 57, 0.25)",
  };

  return (
    <section
      id="contact"
      className="px-6 md:px-10 lg:px-16 pb-16 sm:pb-20"
      style={{ background: "#131313" }}
    >
      <div className="max-w-5xl mx-auto">
        <div
          className="rounded-lg p-8 sm:p-12"
          style={{
            background: "#1c1b1b",
            border: "1px solid rgba(78, 70, 57, 0.2)",
          }}
        >
          <h2 className="font-headline italic text-3xl sm:text-4xl text-center gold-gradient-text mb-10">
            Quick Booking
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto"
          >
            <input
              className={inputClass}
              style={inputStyle}
              placeholder="Full Name"
              value={form.fullName}
              onChange={(e) => setForm({ ...form, fullName: e.target.value })}
              required
            />

            <select
              className={inputClass + " cursor-pointer appearance-none"}
              style={{
                ...inputStyle,
                backgroundImage:
                  "url(\"data:image/svg+xml;charset=US-ASCII,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23a09889' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 1rem center",
              }}
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              required
            >
              <option value="">Requested Service</option>
              <option value="Dental Aesthetics">Dental Aesthetics</option>
              <option value="Hair Restoration">Hair Restoration</option>
              <option value="Plastic Surgery">Plastic Surgery</option>
              <option value="Bariatric Surgery">Bariatric Surgery</option>
              <option value="Eye Surgery">Eye Surgery</option>
            </select>

            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-foreground/80 font-medium">
                Preferred Date
              </label>
              <input
                type="date"
                className={inputClass}
                style={inputStyle}
                placeholder="Preferred Date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-transparent select-none">
                .
              </label>
              <input
                type="email"
                className={inputClass}
                style={inputStyle}
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>

            <div className="sm:col-span-2 flex justify-center mt-4">
              <button
                type="submit"
                className="gold-gradient-bg text-on-primary font-bold px-12 py-3.5 rounded-md tracking-[0.25em] uppercase text-xs hover:scale-105 transition-transform duration-500 shadow-xl"
              >
                Request Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuickBookingSection;
