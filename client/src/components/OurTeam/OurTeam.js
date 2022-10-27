import "./ourteam.css";

export default function OurTeam({ team }) {
  return (
    <div>
      <div className='our-team-container'>
        <h2>OUR TEAM</h2>
        <div className='team-flex-container'>
          {team.map((teamate) => {
            return (
              <div className='team'>
                <p>
                  {teamate.name} ({teamate.role})
                </p>
                <img src={teamate.image} alt={`Image of ${teamate.name} a${teamate.role}`}></img>
                {teamate.role === "Barber" ? (
                  <div className='book-with-btn-container'>
                    <a className='book-with' href={teamate.bookUrl}>
                      BOOK
                    </a>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
