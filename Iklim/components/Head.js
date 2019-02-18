import Head from 'next/head'

function Index() {
  return (
    <div>
      <Head>
        <title>Sirclo - Iklim</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"></link>
      </Head>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">Iklim</a>
          <span 
            style={{ color: 'lightgrey' }}      
            className="nav-link">
              @calvinalx
          </span>
        </div>
      </nav>
    </div>
  )
}

export default Index