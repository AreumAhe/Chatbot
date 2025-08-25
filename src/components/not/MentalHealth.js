import './MentalHealth.css'
import '../../App.css';  // goes two folders up to reach App.css
import { useState } from 'react';

const MentalHealth = () => {

    const [ data, setData] = useState([]);

//     useEffect(() => {
//     window.location.href = 'https://www.google.com';
//   }, []);

    const prompt=(option)=>{
        console.log("Prompt clicked with option:", option);
        fetch("https://your-api-url.com") 
      .then(response => response.json())
      .then(result => {
        // Expecting result to be an array of strings
        console.log(result);
        setData(result);
      })
      .catch(error => console.error("Fetch error:", error));
    } 

    //navigate to 

    return (
        <div className='div'>
            <div className="chatbot">
                <button className='button' onClick={() => prompt(1)}>Prompt 1: </button>
                <br/>
                <button className='button' onClick={() => prompt(2)}>Prompt 2: </button>
                <br/>
                <button className='button' onClick={() => prompt(3)}>Prompt 3: </button>
                <ul>
                {data && data.length > 0 ? (
                    data.map((item, index) => <li key={index}>{item}</li>)
                    ) : (
                    <li>No data yet.</li>
                    )}
                </ul>
            </div>
        </div>
    )


}

export default MentalHealth;