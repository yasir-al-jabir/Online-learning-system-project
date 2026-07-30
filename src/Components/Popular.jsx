
const Popular = (props) => {
  return (
    <div className="bg-white rounded-xl shadow-lg text-center p-6 hover:-translate-y-2 transition">
      <img src={props.img} alt="pic" className="w-40 h-40 rounded-full object-cover mx-auto border-4 border-blue-600 mb-5"/>

      <h3 className="text-2xl font-semibold text-blue-900 mb-2"> {props.name}</h3>

      <p className="text-gray-600">{props.title}</p>
   </div>
  )
}

export default Popular