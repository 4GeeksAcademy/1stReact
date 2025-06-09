const Card = ({image}) => {
return (

 <div className="card h-100">
      <img src={image} className="card-img-top" alt="Imagen de la card" />
      <div className="card-body text-center">
        <h5 className="card-title">Card Title</h5>
        <p className="card-text">
          I have tried to test the props in the simplest way to be able to make different images from the same card.
        </p>
      </div>
      <div className="card-footer text-center">
        <button className="btn btn-primary">Click to Like!👍</button>
      </div>
    </div>
  );
};



export default Card;