const Latest = (props) => {
  return (
    
         
        <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300">
          <img
            src={props.img}
            alt="pic"
            className="w-full h-56 object-cover"
          />

          <h3 className="px-5 pt-5 pb-1 text-2xl font-semibold text-blue-900">
            {props.title}
          </h3>

          <p className="px-5 text-gray-600">{props.description}</p>

          <span className="block px-5 py-4 text-2xl font-bold text-blue-600">
            {props.dollars}
          </span>

     </div>
        
  );
};

export default Latest;
