import { useNavigate } from "react-router-dom";
import Card from "../card/card";

const Home = () => {

  const navigate=useNavigate();

  const mentalHealth = () => {
    console.log("Navigating to /mental-health");
    navigate('/mental-health');
  }

  const productivity = () => {
    console.log("Navigating to /productivity");
    navigate('/productivity');
  }

  return (
    <div className='div'>
      <p className='title'>
        Choose your Buddy to start with:{" "}
      </p>
      <div className='card-container'>
        <Card title="Mental Health Buddy" content="Use prompts to ... your mood here" image="/Thumbnail.jpeg" onClick={mentalHealth}/>
        <Card title="Productivity Tracker" content="Create, Track and Customize your ToDos here" image="/Thumbnail.jpeg" onClick={productivity}/>
      </div>
    </div>
  );
}

export default Home;