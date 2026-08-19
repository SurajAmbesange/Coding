import { createRoot } from 'react-dom/client'

const namelist = ['suraj', 'samay', 'suresh'];

function MyList(){
  return(
    <ul>
      {namelist.map(name => <li key={name}>{name}</li>)}
    </ul>
  );
}

createRoot(document.getElementById('root')).render(

  <MyList />
)
