import { useState } from "react";

const Register = () => {
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const validate = (name, email, password) => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Please enter your full name.";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!email.includes("@")) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required.";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const foundErrors = validate(name, email, password);

    setErrors(foundErrors);

    if (Object.keys(foundErrors).length > 0) return;

    setStatus("loading");

    setTimeout(() => {
      console.log({
        name,
        email,
        password,
      });

      setStatus("success");

      e.target.reset();
    }, 1200);
  };

  return (
    <div className="bg-slate-100 min-h-screen flex items-center justify-center px-4 py-16">

      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8">

        <p className="text-blue-600 uppercase tracking-[4px] text-xs font-bold text-center">
          ONLINE LEARNING SYSTEM
        </p>

        <h1 className="text-4xl font-bold text-center text-blue-900 mt-4">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mt-3 mb-8">
          Join our learning platform and start your journey today.
        </p>

        {status === "success" && (
          <div className="mb-6 rounded-lg bg-green-100 border border-green-500 text-green-700 px-4 py-3">
            ✓ Registration completed successfully.
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
          noValidate
        >
          {/* Full Name */}

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className={`w-full border rounded-lg px-4 py-3 outline-none transition ${
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

          {/* Email */}

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              className={`w-full border rounded-lg px-4 py-3 outline-none transition ${
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
              placeholder="At least 6 characters"
              className={`w-full border rounded-lg px-4 py-3 outline-none transition ${
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
            disabled={status === "loading"}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition disabled:opacity-60"
          >
            {status === "loading"
              ? "Creating Account..."
              : "Create Account"}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-8">
          Already have an account?{" "}
          <a
  href="/login"
  className="text-blue-600 font-semibold hover:underline"
>
  Login
</a>
        </p>

      </div>

    </div>
  );
};

export default Register;
