import './App.css';
import AddMovie from './components/AddMovie';
import AllMovies from './components/AllMovies';
import Header from './components/Header';
import OneMovie from './components/OneMovie';
import {BrowserRouter,Route,Routes} from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
      <div className="bg-white" style={{ height: "100vh" }}>
        <Header  />
        <Routes>
          <Route
            path="/"
            element={
                 <AllMovies />
             }
          />
          <Route
            path="/add"
            element={
                 <AddMovie />
             }
          />
          <Route
            path="/:id"
            element={
                <OneMovie />
            }
          />
        </Routes>
       </div>
    </BrowserRouter>
  );
}

export default App;
