import usersGif from './users.gif'

function Users() {
  return (
    <div className='users'>
    <h1>Retrieving Users and Posts from an API</h1>
    <div className="projects-media">
      <div className="youtube">
        <img className="usersGIF" src={usersGif} />
      </div>
      <div className="explanation">
        This is a simple API retrieval app written in vanilla JS:
        <br /><br />
        <ul>
          <li>The users are retrieved from an API and placed in a table.</li>
          <li>Clicking on the user will retrieve their posts from the API.</li>
          <li>The viewer is able to return to the table with users and retrieve a new set of posts.</li>
          <li>I also completed this project in React.</li>


        </ul>

        <h2>Project Links</h2>
        <div className="apod-project-links">
          <a href="https://github.com/lilyruth/takeHome041622" target="_blank" className="pl github">Project Repo</a>
          <a href="https://041622.netlify.app" target="_blank" className="pl live-project">Live Project</a>

          <a href="https://github.com/lilyruth/react041622" target="_blank" className="pl github">Project in React</a>
          <a href="https://041622remix.netlify.app" target="_blank" className="pl live-project">Live Project in React</a>
        </div>
      </div>
    </div>

  </div>
  )
}

export default Users