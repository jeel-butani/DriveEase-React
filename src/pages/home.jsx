import Navbar from '../components/navBar';
import SearchVehicle from '../components/searchVehicle';
import '../pagesCss/homeCss.css'
const Home = () =>{

    return(
        <>
            <header>
                <Navbar />
            </header>
            <h1 className='text-3xl font-bold mb-6'>Home</h1>
            <SearchVehicle/>
            

            
        </>
    );
};

export default Home;
