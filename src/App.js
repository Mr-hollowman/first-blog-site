import Mynavbar from './Mynavbar';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Create from './Create';
import BlogDetail from './BlogDetail';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
    <div className="App">
        <Mynavbar />
      <div className='content'>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route path='/create' element={<Create />}></Route>
          <Route path='/blogs/:id' element={<BlogDetail />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;