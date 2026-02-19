const PersonCard = ({ person }) => {
  const { name, rol, description, img } = person;
  
  return (
    <div className="person-card">
      <div className="card-image-container">
        <img src={img} alt={name} className="person-img" />
      </div>
      <div className="card-content">
        <h2 className="person-name">{name}</h2>
        <span className="person-rol">{rol}</span>
        <hr className="divider" />
        <p className="person-description">{description}</p>
      </div>

      <style jsx>{`
        .person-card {
          background: #1a1a1a;
          color: #eee;
          border: 2px solid #333;
          border-radius: 12px;
          overflow: hidden;
          width: 300px;
          transition: transform 0.3s ease;
        }
        .person-card:hover {
          transform: translateY(-5px);
          border-color: #f39c12;
        }
        .person-img {
          width: 90%;
          height: 100%;
          object-fit: cover;
        }
        .card-content {
          padding: 20px;
        }
        .person-name {
          margin: 0;
          font-size: 1.5rem;
          color: #f39c12;
        }
        .person-rol {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #888;
        }
        .divider {
          border: 0;
          border-top: 1px solid #333;
          margin: 15px 0;
        }
        .person-description {
          font-size: 0.95rem;
          line-height: 1.4;
          color: #ccc;
        }
      `}</style>
    </div>
  );
};

export default PersonCard;