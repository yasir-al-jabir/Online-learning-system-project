
const AboutCard = (props) => {
  return (
    <div className="bg-slate-50 rounded-xl shadow-lg p-8 hover:-translate-y-2 transition duration-300">

                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">

                    <i className={`${props.icon} text-3xl text-blue-600`}></i>

                </div>

                <h3 className="text-2xl font-bold text-blue-900 mb-4"> {props.title} </h3>

                <p className="text-gray-600 leading-8">{props.description}</p>

    </div>
  )
}

export default AboutCard