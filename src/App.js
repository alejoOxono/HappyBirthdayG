import { Route, Routes } from 'react-router-dom';
import Content from './components/Content';
import Error from './components/Error';
import LandPage from './components/LandPage';

function App() {
  return (
    <div className="App">
      <Routes>
        
        <Route
          path='/'
          element={<LandPage />}
        />

        <Route
          path='/QueLosCumplasFeliz'
          element={<Content />}
        />
        
        <Route
          path='/PersonaErronea'
          element={<Error />}
        />

      </Routes>

    </div>
  );
}

export default App;
