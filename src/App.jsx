import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { TaskListPage, CreateTaskPage } from './app/pages/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path='/' element={<TaskListPage />} />
          <Route path='/create-task' element={<CreateTaskPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
