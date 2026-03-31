import './App.css'

const schedule = [
  { date: 'Apr 12', opponent: 'Redwood Raptors', location: 'Home', time: '7:30 PM' },
  { date: 'Apr 19', opponent: 'Metro Titans', location: 'Away', time: '8:00 PM' },
  { date: 'Apr 25', opponent: 'Summit Storm', location: 'Home', time: '6:45 PM' }
]

const roster = [
  { number: 1, name: 'Damon Cross', role: 'Point Guard' },
  { number: 9, name: 'Luis Ortega', role: 'Wing' },
  { number: 14, name: 'Jordan Hale', role: 'Forward' },
  { number: 27, name: 'Micah Voss', role: 'Center' }
]

export default function App() {
  return (
    <div className="site-wrap">
      <header className="hero">
        <nav className="topbar">
          <p className="brand">Team Alpha</p>
          <ul>
            <li><a href="#schedule">Schedule</a></li>
            <li><a href="#roster">Roster</a></li>
            <li><a href="#tickets">Tickets</a></li>
          </ul>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">2026 Championship Run</p>
          <h1>Fearless. Fast. Hawks.</h1>
          <p>
            Welcome to the official home of the Team Alpha. Follow every game, meet the squad,
            and lock in your seats for this season.
          </p>
          <div className="hero-actions" id="tickets">
            <a className="btn btn-primary" href="#">Buy Tickets</a>
            <a className="btn btn-secondary" href="#schedule">View Schedule</a>
          </div>
        </div>
      </header>

      <main>
        <section className="stats-panel" aria-label="Team statistics">
          <article>
            <h2>24</h2>
            <p>Wins</p>
          </article>
          <article>
            <h2>5</h2>
            <p>Home Streak</p>
          </article>
          <article>
            <h2>112.4</h2>
            <p>Avg Points</p>
          </article>
          <article>
            <h2>92%</h2>
            <p>Fan Attendance</p>
          </article>
        </section>

        <section id="schedule" className="content-block">
          <div className="section-head">
            <p>Upcoming Games</p>
            <h3>Season Schedule</h3>
          </div>
          <div className="card-grid">
            {schedule.map((game) => (
              <article key={game.date + game.opponent} className="card">
                <p className="card-date">{game.date}</p>
                <h4>vs {game.opponent}</h4>
                <p>{game.location} Arena</p>
                <p>{game.time}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="roster" className="content-block">
          <div className="section-head">
            <p>Meet The Squad</p>
            <h3>Starting Lineup</h3>
          </div>
          <div className="roster-list">
            {roster.map((player) => (
              <article key={player.number} className="roster-item">
                <p className="number">#{player.number}</p>
                <div>
                  <h4>{player.name}</h4>
                  <p>{player.role}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Team Alpha Basketball Club</p>
        <p>451 Pierline Blvd, Bayfront District</p>
      </footer>
    </div>
  )
}