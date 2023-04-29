import { useEffect, useState } from "react";
import axios from "axios";
import AdoptionTiles from "../Tiles";
import { Link } from "react-router-dom";

interface Dog {
  name: string;
  age: number;
  image: string;
  gender: string;
  breed: string;
  petID: number;
}

function DogAdoption() {
  const [dogs, setDogs] = useState<Dog[]>([]);

  useEffect(() => {
    axios
      .get("/api/dogs")
      .then((response) => {
        setDogs(response.data.dogs);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <img
        id="Adoptions-Header-Image"
        src="src/componets/Images/Adoptions.jpeg"
        alt=""
      />
      <h1 id="Adoptions-Title">Dogs for adoption</h1>
      <ul id="adoption-Card">
        {dogs.map((dog) => (
          <li key={dog.petID}>
            <Link to={`/Adoptions/Pet/${dog.petID}`}>
              <AdoptionTiles
                image={dog.image}
                text={`${dog.name}: ${dog.gender} `}
                text1={`Age: ${dog.age}`}
                text2={`Breed: ${dog.breed}`}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DogAdoption;
