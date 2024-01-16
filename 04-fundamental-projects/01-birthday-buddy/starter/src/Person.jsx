const Person = ({ image, name, age }) => {
  return (
    <div className="person">
      <img src={image} alt={name} className="img" />
      <h4>{name}</h4>
      <p>{age} years</p>
    </div>
  );
};
export default Person;
