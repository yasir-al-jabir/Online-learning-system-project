import { useState } from "react";

const Login = () => {

    const [errors, setErrors] = useState({});

    const [status, setStatus] = useState("idle");

    const validate = (email, password) => {

        const newErrors = {};

        if (!email.trim()) {

            newErrors.email = "Email is required.";

        } else if (!email.includes("@")) {

            newErrors.email = "Please enter a valid email.";

        }

        if (!password.trim()) {

            newErrors.password = "Password is required.";

        }

        return newErrors;

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        const email = e.target.email.value;

        const password = e.target.password.value;

        const foundErrors = validate(email, password);

        setErrors(foundErrors);

        if (Object.keys(foundErrors).length > 0) return;

        setStatus("sending");

        setTimeout(() => {

            console.log({
                email,
                password,
            });

            setStatus("success");

            e.target.reset();

        }, 1200);

    };

    return (

        <div>

            {/* Login Section */}

            <section className="bg-slate-100 min-h-screen flex items-center justify-center py-12">

                <div className="bg-white w-full max-w-md rounded-xl shadow-lg border border-gray-200 p-8">

                    <span className="block text-center text-xs font-semibold uppercase tracking-[4px] text-blue-600">
                        LearnHub Academy
                    </span>

                    <h1 className="text-4xl font-bold text-center text-blue-900 mt-4">
                        Welcome Back
                    </h1>

                    <p className="text-center text-gray-500 mt-4">
                        Login to continue your online learning journey.
                    </p>

                    {status === "success" && (

                        <div className="mt-6 bg-green-100 border border-green-500 text-green-700 rounded-lg px-4 py-3">

                            ✓ Login Successful.

                        </div>

                    )}

                    <form
                        onSubmit={handleSubmit}
                        className="mt-8 space-y-6"
                        noValidate
                    >

                        {/* Email */}

                        <div>

                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Email Address
                            </label>

                            <input
                                type="email"
                                name="email"
                                placeholder="example@gmail.com"
                                className={`w-full border rounded-lg px-4 py-3 outline-none transition duration-300 ${
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

                        {/* Password */}

                        <div>

                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Password
                            </label>

                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                className={`w-full border rounded-lg px-4 py-3 outline-none transition duration-300 ${
                                    errors.password
                                        ? "border-red-500"
                                        : "border-gray-300 focus:border-blue-600"
                                }`}
                            />

                            {errors.password && (

                                <p className="text-red-500 text-sm mt-2">
                                    {errors.password}
                                </p>

                            )}

                        </div>

                        {/* Button */}

                        <button
                            type="submit"
                            disabled={status === "sending"}
                            className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white py-3 rounded-lg font-semibold transition duration-300"
                        >

                            {status === "sending"
                                ? "Logging In..."
                                : "Login"}

                        </button>

                    </form>

                    <p className="text-center text-gray-500 mt-8">

                        Don't have an account?

                        <a href="/registration" className="text-blue-600 font-semibold cursor-pointer ml-2 hover:underline">
                            Register
                        </a>

                    </p>

                </div>

            </section>

        </div>

    );

};

export default Login;
