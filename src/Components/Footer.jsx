const Footer = () => {
    return (
        <footer className="bg-slate-900 text-gray-300">

            <div className="max-w-7xl mx-auto px-8 py-16">

              
                <div className="mb-14">

                    <h2 className="text-3xl font-bold text-white">
                        📚 LearnHub
                    </h2>

                    <p className="mt-6 max-w-2xl leading-8">
                        LearnHub is an online learning platform that empowers
                        students to gain practical skills from expert instructors
                        anytime, anywhere.
                    </p>

                    <div className="mt-8 space-y-3">
                        <p>📍 Chattogram, Bangladesh</p>
                        <p>📧 support@learnhub.com</p>
                        <p>📞 +880 1234-567890</p>
                    </div>

                </div>

                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">

                    
                    <div>
                        <h3 className="text-yellow-400 uppercase font-bold mb-5">
                            Quick Links
                        </h3>

                        <ul className="space-y-3">
                            <li><a href="/home" className="hover:text-white transition">Home</a></li>
                            <li><a href="/about" className="hover:text-white transition">About</a></li>
                            <li><a href="/courses" className="hover:text-white transition">Courses</a></li>
                            <li><a href="/instructors" className="hover:text-white transition">Instructors</a></li>
                            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
                        </ul>
                    </div>

                    
                    <div>
                        <h3 className="text-yellow-400 uppercase font-bold mb-5">
                            Categories
                        </h3>

                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-white transition">Web Development</a></li>
                            <li><a href="#" className="hover:text-white transition">Artificial Intelligence</a></li>
                            <li><a href="#" className="hover:text-white transition">Graphic Design</a></li>
                            <li><a href="#" className="hover:text-white transition">Business</a></li>
                            <li><a href="#" className="hover:text-white transition">Data Science</a></li>
                        </ul>
                    </div>

                    
                    <div>
                        <h3 className="text-yellow-400 uppercase font-bold mb-5">
                            Support
                        </h3>

                        <ul className="space-y-3">
                            <li><a href="/login" className="hover:text-white transition">Login</a></li>
                            <li><a href="/register" className="hover:text-white transition">Registration</a></li>
                            <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                            <li><a href="#" className="hover:text-white transition">FAQs</a></li>
                            <li><a href="#" className="hover:text-white transition">Feedback</a></li>
                        </ul>
                    </div>

                    
                    <div>
                        <h3 className="text-yellow-400 uppercase font-bold mb-5">
                            Legal
                        </h3>

                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
                            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
                            <li><a href="#" className="hover:text-white transition">Refund Policy</a></li>
                            <li><a href="#" className="hover:text-white transition">Disclaimer</a></li>
                        </ul>
                    </div>

                    
                    <div>
                        <h3 className="text-yellow-400 uppercase font-bold mb-5">
                            Follow Us
                        </h3>

                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-white transition">Facebook</a></li>
                            <li><a href="#" className="hover:text-white transition">Instagram</a></li>
                            <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
                            <li><a href="#" className="hover:text-white transition">YouTube</a></li>
                            <li><a href="#" className="hover:text-white transition">Twitter (X)</a></li>
                        </ul>
                    </div>

                </div>

                
                <div className="border-t border-gray-700 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center">

                    <p className="text-gray-400 text-sm">
                        © 2026 LearnHub Online Learning System. All Rights Reserved.
                    </p>

                    <div className="flex gap-6 mt-4 md:mt-0 text-sm">
                        <a href="#" className="hover:text-white transition">Privacy</a>
                        <a href="#" className="hover:text-white transition">Terms</a>
                        <a href="#" className="hover:text-white transition">Support</a>
                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;
