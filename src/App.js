import './App.css'; 
import CardTemperatura from './Components/CardTemperatura';

function App() {
  const DiasSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

  let contador = 0;

  return (
    <div className="App">
      <div className='lista-previsoes'>
        {
          DiasSemana.map((dia) => {
            return(<CardTemperatura 
              temperature="20"
              local="São Paulo" 
              weather="Nublado" 
              day={dia}
              />)
            })
          }
      </div>

      <button onClick={() => {console.log(contador += 1)}}>Click aqui</button>
    </div>
  );
}

export default App;
