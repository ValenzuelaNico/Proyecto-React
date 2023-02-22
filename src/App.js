import './App.css';
import reySi from './reyes-img/rey_sisebuto.png'
import reyLeo from './reyes-img/rey_leogivildo.png'
import reyAta from './reyes-img/rey_atanagildo.png'
import incognito from './reyes-img/rey_incognito.png'

function App() {
  let nombres = ["Sisebuto","Leogivildo","Atanagildo","Visto"]
  
  const cambiaFoto = (e)=>{
    if(e.target.src.includes("incognito")) {
      e.target.style.visibility="hidden"
    }else
{    e.target.src = incognito;
     e.target.parentNode.style.backgroundColor = "white"
}
  }
  const cambiaNombre =(e)=>{
    if (e.target.innerHTML == nombres[3]){
      e.target.innerHTML= ' ';
    }else
    {
      e.target.innerHTML = nombres[3]
    }
    
    
  }
  return (
    <div className='container'>
      <div className='rey-img'>
        <img src={reySi} className="img" onClick={cambiaFoto}></img>
        <h4 onClick={cambiaNombre}>{nombres[0]}</h4>
      </div>
      <div className='rey-img'>
        <img src={reyLeo} className="img" onClick={cambiaFoto}></img>
        <h4 onClick={cambiaNombre}>{nombres[1]}</h4>
      </div>
      <div className='rey-img'>
        <img src={reyAta}className="img" onClick={cambiaFoto}></img>
        <h4 onClick={cambiaNombre}>{nombres[2]}</h4>
      </div>
    </div>
  );
}

export default App;
