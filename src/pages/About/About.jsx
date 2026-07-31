import AboutBox from "../../Components/AboutBox";
import AboutCard from "../../Components/AboutCard";

const About = () => {
    return (
        <>

            <section className="bg-blue-900 py-12 sm:py-16 md:py-20">

                <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">

                    <span className="text-xs font-semibold uppercase tracking-[4px] text-yellow-400">
                        About Us
                    </span>

                    <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mt-4 leading-tight">
                        ABOUT
                        <br />
                        LEARNHUB
                    </h1>

                    <p className="mt-5 max-w-2xl text-gray-300 text-base leading-8">
                        LearnHub is an online learning platform dedicated to
                        helping students develop valuable skills through
                        high-quality courses taught by experienced instructors.
                        Our mission is to make education accessible,
                        affordable, and engaging for everyone.
                    </p>

                </div>

            </section>


<section className="bg-slate-100 py-12 sm:py-16 md:py-20">

    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">


        <div>

            <span className="text-sm font-semibold uppercase tracking-[4px] text-blue-600">
                Our Story
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mt-4">
                Empowering Students Through Online Learning
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
                LearnHub was founded with the vision of making quality
                education available to everyone, regardless of location
                or background. We believe that learning should be
                flexible, practical, and accessible for all students.
            </p>

            <p className="mt-5 text-gray-600 leading-8">
                Our platform offers a wide range of courses taught by
                experienced instructors. From web development and
                programming to business and design, LearnHub helps
                learners build real-world skills and achieve their
                career goals.
            </p>

        </div>


        <div>

            <img
                src="https://images.unsplash.com/photo-1673515334386-2b24073bb22f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="About LearnHub" className="w-full h-[450px] object-cover rounded-xl shadow-lg" />
        </div>

    </div>

  </section>


<section className="bg-white py-12 sm:py-16 md:py-20">

    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">

        <div className="text-center">

            <span className="text-sm font-semibold uppercase tracking-[4px] text-blue-600">
                Our Goals
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mt-4">
                Mission & Vision
            </h2>

            <p className="mt-5 max-w-3xl mx-auto text-gray-600 leading-8">
                We are committed to helping learners achieve academic
                excellence and career success through innovative,
                flexible, and high-quality online education.
            </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">

            <AboutCard icon="fa-solid fa-bullseye" title="Our Mission" description="To provide affordable, accessible, and engaging online education that empowers students with practical knowledge and industry-ready skills." />
            <AboutCard icon="fa-solid fa-eye" title="Our Vision" description="To become one of the world's most trusted online learning platforms by inspiring lifelong learning and empowering millions of learners worldwide." />
        </div>

    </div>

   </section>

   

<section className="bg-blue-900 py-12 sm:py-16 md:py-20">

    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">

        <div className="text-center">

            <span className="text-sm font-semibold uppercase tracking-[4px] text-yellow-400">
                Achievements
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4">
                LearnHub in Numbers
            </h2>

            <p className="mt-5 max-w-3xl mx-auto text-gray-300 leading-8">
                Thousands of learners trust LearnHub to improve their
                knowledge, develop new skills, and achieve their goals.
            </p>

        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

         <AboutBox dollar="20K+" title="Students" /> 
         <AboutBox dollar="500+" title="Online Courses" /> 
         <AboutBox dollar="120+" title="Expert Instructors" /> 
         <AboutBox dollar="15K+" title="Certificates Issued" /> 

        </div>

    </div>

  </section>

  
        </>
    );
};

export default About;
