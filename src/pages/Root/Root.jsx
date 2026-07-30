import Footer from "../../Components/Footer";
import Navigation from "../../Components/Navigation";
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <Navigation/>
            
            <Outlet/>

            <Footer/>
        </div>
    );
};

export default Root;
