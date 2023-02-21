import './App.css';
import reySi from './reyes-img/rey_sisebuto.png'
import reyLeo from './reyes-img/rey_leogivildo.png'
import reyAta from './reyes-img/rey_atanagildo.png'

function App() {
  let nombres = ["Sisebuto","Leogivildo","Atanagildo"]
  return (
    <div className='container'>
      <div className='rey-img'>
        <img src={reySi} className="img"></img>
        <h4>{nombres[0]}</h4>
      </div>
      <div className='rey-img'>
        <img src={reyLeo} className="img"></img>
        <h4>Leogivildo</h4>
      </div>
      <div className='rey-img'>
        <img src={reyAta}className="img"></img>
        <h4>Atanagildo</h4>
      </div>
    </div>
  );
}

export default App;
// 3 cajas cada una con imagen cada una