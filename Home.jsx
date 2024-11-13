/*import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
const Home=()=>{
    const navigate=useNavigate()
    const handleClick=()=>
    {
     navigate('/make');
    }
    return(
        <>
        <div className="home">
            <div className='hh'>
            <h1 >Welcome to inventory</h1> <h1>Managmet System!</h1>
            <p>An inventory management system (or inventory system)<br></br> is the process by which you track your goods<br></br> throughout your entire supply chain, from <br></br>purchasing to production to end sales.</p>
            <button className="but" onClick={handleClick}>StartNow</button>
        </div>
        </div>
        </>
    );
};
export default Home;*/
import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/make');
    };

    const handleLearnMore = () => {
        // Navigate or handle another feature
        navigate('/learn-more');
    };

    return (
        <>
            <div className="home">
                <div className="hh">
                    <h1>Welcome to Inventory</h1>
                    <h1>Management System!</h1>
                    <p>
                        An inventory management system (or inventory system)
                        is the process by which you track your goods
                        throughout your entire supply chain, from
                        purchasing to production to end sales.
                    </p>
                    <div className="button-group">
                        <button className="but" onClick={handleClick}>Start Now</button>
                        <button className="but secondary" onClick={handleLearnMore}>Learn More</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
