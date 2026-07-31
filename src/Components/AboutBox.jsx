

const AboutBox = (props) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 text-center">

                <h3 className="text-4xl font-bold text-blue-600">{props.dollar}</h3>

                <p className="mt-3 text-gray-600">{props.title}</p>

    </div>
  )
}

export default AboutBox