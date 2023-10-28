import './App.css';
import Random from './Comps/Random';
import Tags from './Comps/Tags';


function App() {
  return (
    <div className="mb-96  w-full h-screen flex flex-col bg App relative overflow-x-hidden">
      <h1 className='rounded-md bg-red-300 ml-12 items-center mr-3 text-2xl font-bold absolute w-11/12 p-1 mt-2 '>Random Gifs</h1>
      <div className=''>
        <Random />
        <Tags />
      </div>
    </div>
  );
}

export default App;
