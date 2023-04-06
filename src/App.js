import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import Create from './pages/create/Create';
import NotFound from './pages/NotFound/NotFound';
import BlogDetail from './pages/blogDetail/BlogDetail';
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <div className="Content">

          <Routes>
                        
            <Route path="/home" element={<Home/>} />
            <Route path="/create" element={<Create/>} />
            <Route path="/blogs/:id" element={<BlogDetail/>} />
            <Route path="/" element={<Home/>} />
            <Route path="*" element={<NotFound/>} />

          </Routes>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
