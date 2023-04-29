import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

interface Dog {
  name: string;
  age: number;
  image: string;
  gender: string;
  breed: string;
  petID: number;
  description: string;
}

function PetDetails() {
  const [dog, setDog] = useState<Dog>();
  const { petID } = useParams<{ petID: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/api/dogs/${petID}`)
      .then((response) => {
        setDog(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [petID]);

  function AdoptDog() {
    axios
      .post(`/api/dogs/${petID}/adopt`)
      .then((response) => {
        console.log(response.data);
        navigate("/Adoptions");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  if (!dog) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 id="PetUrlHeader">{dog.name}</h1>
      <div id="PetUrlImage">
        <img src={dog.image} alt={dog.name} />
      </div>
      <div id="PetUrlInfo">
        <p>Breed: {dog.breed}</p>
        <p>Age: {dog.age}</p>
        <p>Description: {dog.description}</p>
        <button onClick={AdoptDog}>ADOPT</button>
      </div>
    </div>
  );
}

export default PetDetails;
