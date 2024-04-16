import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchPets, archivePet } from "../../api/petsApi";
import styles from "./PetList.module.scss";
import Button from "../../components/Button/Button";
import { ROUTES } from "../../routes/consts";

const PetList = () => {
  const [pets, setPets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getPets = async () => {
      try {
        setIsLoading(true);
        const data = await fetchPets();
        setPets(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    getPets();
  }, []);

  const handleDelete = async (petId) => {
    try {
      setIsLoading(true);
      await archivePet(petId);
      setPets(pets.filter((pet) => pet.id !== petId));
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className={styles.titleBar}>
        <h1>Pet List</h1>
        <Button onClick={() => navigate(ROUTES.PET_LIST)}>ADD PET</Button>
      </div>
      <div className={styles.petListContainer}>
        {pets.map((pet) => (
          <div key={pet.id} className={styles.petItem}>
            <div className={styles.petDetails}>
              <h3 className={styles.petName}>{pet.name}</h3>
              <p className={styles.detail}>{pet.dob}</p>
              <p className={styles.detail}>{pet.client_email}</p>
            </div>
            <div className={styles.buttonGroup}>
              <Button className={styles.viewLogButton}>VIEW LOG</Button>
              <Button
                className={styles.deleteButton}
                onClick={() => handleDelete(pet.id)}
              >
                DELETE
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetList;
