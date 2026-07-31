
const Contactcard = (props) => {
  return (
    <div className="rounded-lg bg-blue-900 text-white p-6 transition hover:-translate-y-1 shadow-md">

        <h4 className="uppercase tracking-[3px] text-sm font-bold mb-4 text-yellow-400">
            {props.title}
        </h4>

        <p className="leading-7">
            {props.description}
        </p>

    </div>
  )
}

export default Contactcard