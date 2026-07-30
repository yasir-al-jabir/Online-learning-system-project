import Card from "../../Components/Card"
import Latest from "../../Components/Latest"
import Popular from "../../Components/Popular"
import Trending from "../../Components/Trending/Trending"



const Home = () => {
  return (
    <>
       <section >

        <div className="h-[90vh] bg-cover bg-center flex justify-center items-center text-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
  }}>

            <div className="w-4/5 max-w-[850px] text-white">
    <h1 className="text-[58px] leading-[1.2] mb-6 font-bold">
        Learn New Skills Anytime, Anywhere
    </h1>

    <p className="text-[22px] text-gray-300 mb-9">
        Learn from expert instructors with interactive courses designed to
        help you achieve your career goals.
    </p>
</div>

        </div>

    </section>
    
    <section>
         <div className="text-center text-[50px] text-blue-700"><h2>Trending Courses</h2></div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-[25px] mt-10">
            <Trending icon="fa-solid fa-code" title="Programming"/>
            <Trending icon="fa-solid fa-laptop-code" title="Web Development"/>
            <Trending icon="fa-solid fa-mobile-screen-button" title="App Development"/>
            <Trending icon="fa-solid fa-brain" title="Artificial Intelligence"/>
            <Trending icon="fa-solid fa-chart-line" title="Business"/>
            <Trending icon="fa-solid fa-palette" title="Graphic Design"/>
        </div>
    </section>

     <section className="py-20 px-8 bg-blue-100">
        <div className="text-center text-[50px] text-blue-700"><h2>Latest Courses</h2></div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            
                <Latest img="https://d3mxt5v3yxgcsr.cloudfront.net/courses/17147/course_17147_image.jpeg" title="HTML & CSS" description="Learn the fundamentals of HTML5 and CSS3 to build responsive,
            modern, and attractive websites from scratch." dollars="$49" />
                <Latest img="https://www.tutorialrepublic.com/lib/images/javascript-illustration.png" title="JavaScript" description="Master JavaScript by learning variables, functions, DOM
            manipulation, ES6 features, and interactive web development." dollars="$59"/>
                <Latest img="https://www.interviewgig.com/wp-content/uploads/2023/08/Pythopn-Coding-Examples-2-1536x865.jpg" title="Python" description="Start coding with Python and explore programming, automation, data
            analysis, and beginner-friendly project development." dollars="$69"/>
        </div>
     </section>
     
     <section className="py-20 px-8">
      <h2 className="text-4xl font-bold text-center text-blue-900"> Why Choose LearnHub? </h2>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
         <Card icon="fa-solid fa-user-graduate" title="Expert Teachers" />
         <Card icon="fa-solid fa-certificate" title="Certificates" />
         <Card icon="fa-solid fa-clock" title="Lifetime Access" />
         <Card icon="fa-solid fa-headset" title="24/7 Support" />
       </div>
     </section>
     <section className="bg-slate-50 py-20 px-8 bg-blue-400">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12"> Popular Instructors </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <Popular img="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="John Smith" title="Web Developer"/>
            <Popular img="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="Sarah Lee" title="UI/UX Designer"/>
            <Popular img="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="David Brown" title="Python Expert"/>
        </div>
     </section>
     <section className="bg-blue-600 text-white py-16 px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center gap-8">
        <div>
          <h2 className="text-5xl font-bold mb-2">20,000+</h2>
          <p className="text-xl">Students</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold mb-2">500+</h2>
          <p className="text-xl">Courses</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold mb-2">120+</h2>
          <p className="text-xl">Instructors</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold mb-2">15,000+</h2>
          <p className="text-xl">Certificates</p>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home

