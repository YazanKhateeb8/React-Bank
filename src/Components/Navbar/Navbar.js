import './Navbar.css';
import { BrowserRouter as Router, Route, Routes , Link, useParams} from 'react-router-dom';

export default function Navbar({balance}) {
  
  
  

  return (
    <div className="navbar">
      <Link to="/"><h3>Transactions</h3></Link>
      <Link to={`/Operations`}><h3>Operations</h3></Link>
      <Link to={`/Breakdown`}><h3>Breakdown</h3></Link>
       <h3>BALANCE :{balance} $</h3>
    </div>
  )
}
