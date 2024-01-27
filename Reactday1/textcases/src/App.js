import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
function App() {
  return (
   <>
   <div>
     <Navbar title="TextCases"/>
     <div className='container'>
     <TextForm />
     </div>
   </div>
   </>
  );
}
export default App;
