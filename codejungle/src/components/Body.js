import '../Styles/Body.css';
import homeImg from '../Assets/home-img.jpg';

function Body() {
  const team = [
    { name: 'John Doe', role: 'Developer', img: 'star.png' },
    { name: 'Jane Smith', role: 'Designer', img: 'star.png' },
    // môžeš pridať viac členov
  ];

  return (
    <div className="body">
    
      {/* O firme */}
      <section className="about">
        <img className='HomeImg' src={homeImg} alt="us" />
      </section>

      {/* Náš tím */}
      <section className="team">
        <h2>Náš tím</h2>
        <div className="team-grid">
          {team.map((member, index) => (
            <div key={index} className="team-card">
              <img src={member.img} alt={member.name} />
              <div className="team-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Body;
