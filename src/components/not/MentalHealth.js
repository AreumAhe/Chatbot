import './MentalHealth.css'
import '../../App.css';  // goes two folders up to reach App.css
import { useEffect, useState } from 'react';

const MentalHealth = () => {

    const [ data, setData ] = useState([]);
    const [ solution, setSolution ] = useState([]);


//     useEffect(() => {
//     window.location.href = 'https://www.google.com';
//   }, []);

    useEffect(() => {
        fetch("http://localhost:9002/mentalhealth/showprompts") 
      .then(response => response.json())
      .then(result => {
        // Expecting result to be an array of strings
        console.log(result);
        setData(result);
      })
      .catch(error => console.error("Fetch error:", error));
    }, []);

    const prompt = (item) => {
        fetch(`http://localhost:9002/mentalhealth/`+ item) 
        .then(response => response.text())
      .then(result => {
        console.log(result);
        setSolution(result);
      })
      .catch(error => console.error("Fetch error:", error));
    }

    return (
        <div className='div'>
            <div className='Header'>
                <p className='element'>Mental Health Chatbot</p>
                <p className='element'>❤️</p>
            </div>
            <div className="chatbot">
                <h3>How are you feeling today?</h3>

                <ul>
                {data && data.length > 0 ? (
                    data.map((item, index) => <li><button className='button' key={index} onClick={() => prompt(item)}>{item}</button></li>)
                    ) : (
                    <li>No data yet.</li>
                    )}
                    <p>{solution}</p>
                </ul>

            </div>
        </div>
    )


}

export default MentalHealth;