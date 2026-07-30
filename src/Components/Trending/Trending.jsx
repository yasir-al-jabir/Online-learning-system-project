
import "./Trending.css"
const Trending = (props) => {
  return (
        <div className="category-card">

                <i className={props.icon}></i>

                <h3>{props.title}</h3>
                
        </div>
  )
}

export default Trending