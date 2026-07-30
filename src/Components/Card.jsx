const Card = (props) => {
  return (
    <div className="bg-slate-50 rounded-xl shadow-lg p-8 text-center hover:bg-blue-600 hover:text-white hover:-translate-y-2 transition duration-300 group">
      <i className={`${props.icon} text-5xl text-blue-600 mb-5 group-hover:text-white`}></i>

      <h3 className="text-2xl font-semibold">{props.title}</h3>
    </div>
  );
};

export default Card;
