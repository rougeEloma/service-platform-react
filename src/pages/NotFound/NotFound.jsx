import './NotFound.scss';

const NotFound = () => {
  return (
    <div className='notFound'>
      <div className='container'>
        <h1>404</h1>
        <div className='text'>
          <h2>Page non trouvée</h2>
          <p>Désolé, nous n’avons pas trouvé la page que vous recherchez.</p>
        </div>
      </div>
    </div>
  )
}

export default NotFound;