export const fetchPets = async () => {
  const response = await fetch(
    "https://glittery-dull-snickerdoodle.glitch.me/v1/pets"
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else if (
    !response.headers.get("Content-Type").includes("application/json")
  ) {
    throw new Error("Did not receive JSON");
  }
  return await response.json();
};

// export const createPet = async (newPet) => {
//   const response = await fetch("https://glittery-dull-snickerdoodle.glitch.me/v1/pets", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(newPet),
//   });
//   return await response.json();
// };

export const archivePet = async (petId) => {
  const response = await fetch(
    `https://glittery-dull-snickerdoodle.glitch.me/v1/pets/${petId}`,
    {
      method: "DELETE",
    }
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else if (
    !response.headers.get("Content-Type").includes("application/json")
  ) {
    throw new Error("Did not receive JSON");
  }
  return await response.json();
};
