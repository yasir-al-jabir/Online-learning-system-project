import { useState } from 'react';
import Contactcard from '../../Components/Contactcard';

const categories = [ "Courses", "Admissions", "Certificates", "Support", "Other"];

const Contact = () => {
   const [category, setCategory] = useState("Courses");

   const [message, setMessage] = useState("");

   const [errors, setErrors] = useState({});

   const [status, setStatus] = useState("idle");

   const maxLength = 500;

   const validate = (name, email, message) => {

    const newErrors = {};

    if (!name.trim()) {
        newErrors.name = "Please enter your name.";
    }

    if (!email.trim()) {
        newErrors.email = "Email is required.";
    } else if (!email.includes("@")) {
        newErrors.email = "Please enter a valid email.";
    }

    if (!message.trim()) {
        newErrors.message = "Please enter your message.";
    }

    return newErrors;

   };
    
   const handleSubmit = (e) => {

    e.preventDefault();

    const name = e.target.name.value;

    const email = e.target.email.value;

    const messageValue = e.target.message.value;

    const foundErrors = validate(
        name,
        email,
        messageValue
    );

    setErrors(foundErrors);

    if (Object.keys(foundErrors).length > 0) return;

    setStatus("sending");

    setTimeout(() => {

        console.log({
            category,
            name,
            email,
            message: messageValue,
        });

        setStatus("sent");

        e.target.reset();

        setMessage("");

    }, 1200);

   };

   

    return (
    <div>

    

    <section className="bg-blue-900 py-12 sm:py-16 md:py-20">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">

        <span className="text-xs font-semibold uppercase tracking-[4px] text-yellow-400">
          Get In Touch
        </span>

        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mt-4 leading-tight">
          CONTACT
          <br />
          LEARNHUB
        </h1>

        <p className="mt-5 max-w-xl text-gray-300 text-base leading-8">
          Have questions about our online courses, admissions,
          certificates, or learning platform? Our team is
          always ready to help you start your learning journey.
        </p>

      </div>

    </section>



    

    <section className="bg-slate-100">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 grid grid-cols-1 gap-8 lg:grid-cols-5">


        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
         <Contactcard title="Head Office" description="LearnHub Academy, 123 Education Street, Chattogram, Bangladesh" />
         <Contactcard title="Phone" description="+880 1700-000000" />
         <Contactcard title="Email" description="support@learnhub.com" />
         <Contactcard title="Office Hours" description="Saturday - Thursday, 9:00 AM - 6:00 PM" />
        </div>


        

        <div className="lg:col-span-3">

          <div className="rounded-lg bg-white shadow-md border border-gray-200 p-6 sm:p-8 md:p-10">

            <h2 className="text-3xl font-bold text-blue-900 mb-2">
              Send a Message
            </h2>

            <p className="text-gray-500 mb-8">
              Choose a category below and our team will respond as soon as possible.
            </p>
     
<div className="flex flex-wrap gap-3 mb-8">

    {categories.map((item) => (

        <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            className={`px-5 py-3 rounded-full text-sm font-semibold transition duration-300 ${
                category === item
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-blue-100"
            }`}
        >
            {item}
        </button>

    ))}

</div>



{status === "sent" && (

    <div className="mb-6 bg-green-100 border border-green-500 text-green-700 rounded-lg px-4 py-3">

        ✓ Your message has been sent successfully.

    </div>

)}

<form
    onSubmit={handleSubmit}
    className="space-y-6"
    noValidate
>

    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>

            <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
            </label>

            <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className={`w-full rounded-lg border px-4 py-3 outline-none transition duration-300 ${
                    errors.name
                        ? "border-red-500"
                        : "border-gray-300 focus:border-blue-600"
                }`}
            />

            {errors.name && (

                <p className="text-red-500 text-sm mt-2">
                    {errors.name}
                </p>

            )}

        </div>

        <div>

            <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
            </label>

            <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                className={`w-full rounded-lg border px-4 py-3 outline-none transition duration-300 ${
                    errors.email
                        ? "border-red-500"
                        : "border-gray-300 focus:border-blue-600"
                }`}
            />

            {errors.email && (

                <p className="text-red-500 text-sm mt-2">
                    {errors.email}
                </p>

            )}

        </div>

    </div>

    

    <div>

        <div className="flex items-center justify-between mb-2">

            <label className="text-sm font-semibold text-gray-700">
                Message
            </label>

            <span className="text-sm text-gray-400">
                {message.length}/{maxLength}
            </span>

        </div>

        <textarea
            name="message"
            rows="6"
            maxLength={maxLength}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={`How can we help you with ${category.toLowerCase()}?`}
            className={`w-full rounded-lg border px-4 py-3 resize-none outline-none transition duration-300 ${
                errors.message
                    ? "border-red-500"
                    : "border-gray-300 focus:border-blue-600"
            }`}
        ></textarea>

        {errors.message && (

            <p className="text-red-500 text-sm mt-2">
                {errors.message}
            </p>

        )}

    </div>

    

    <button
        type="submit"
        disabled={status === "sending"}
        className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white px-10 py-3 rounded-lg font-semibold transition duration-300"
    >

        {status === "sending"
            ? "Sending..."
            : "Send Message"}

    </button>

</form>

        </div>

      </div>

    </div>

</section>

</div>
);
};

export default Contact;
