const Navigation = () => {
    return (
        <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
            <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-8">

                
                <div className="flex items-center gap-3">

                    <span className="text-4xl">📚</span>

                    <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                        LearnHub
                    </h1>

                </div>

        
                <ul className="flex items-center gap-10 text-[17px] font-medium text-gray-700">

                    <li>
                        <a
                            href="/home"
                            className="relative transition duration-300 hover:text-indigo-600
                            after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px]
                            after:bg-indigo-600 after:transition-all after:duration-300
                            hover:after:w-full"
                        >
                            Home
                        </a>
                    </li>

                    <li>
                        <a
                            href="/about"
                            className="relative transition duration-300 hover:text-indigo-600
                            after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px]
                            after:bg-indigo-600 after:transition-all after:duration-300
                            hover:after:w-full"
                        >
                            About
                        </a>
                    </li>

                    <li>
                        <a
                            href="/courses"
                            className="relative transition duration-300 hover:text-indigo-600
                            after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px]
                            after:bg-indigo-600 after:transition-all after:duration-300
                            hover:after:w-full"
                        >
                            Courses
                        </a>
                    </li>

                    <li>
                        <a
                            href="/instructors"
                            className="relative transition duration-300 hover:text-indigo-600
                            after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px]
                            after:bg-indigo-600 after:transition-all after:duration-300
                            hover:after:w-full"
                        >
                            Instructors
                        </a>
                    </li>

                    <li>
                        <a
                            href="/contact"
                            className="relative transition duration-300 hover:text-indigo-600
                            after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px]
                            after:bg-indigo-600 after:transition-all after:duration-300
                            hover:after:w-full"
                        >
                            Contact
                        </a>
                    </li>

                </ul>

                <div className="flex items-center gap-4">

                    <button className="btn btn-outline btn-primary rounded-lg px-6">
                        Login
                    </button>

                    <button className="btn bg-gradient-to-r from-blue-600 to-purple-600 text-white border-none rounded-lg px-6 hover:scale-105 transition duration-300">
                        Register
                    </button>

                </div>

            </div>
        </nav>
    );
};

export default Navigation;
