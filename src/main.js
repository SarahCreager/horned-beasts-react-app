import HornedBeast from './hornedBeast';
import dataArray from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';



function Main() {
  const animalArray = dataArray.map(animal => {
    return (
      <HornedBeast
        title={animal.title}
        image_url={animal.image_url}
        description={animal.description}
      />
    );
  });

  return animalArray;
}

export default Main;
