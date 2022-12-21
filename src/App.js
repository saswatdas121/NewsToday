import './App.css';
import NavigationBar from './Components/NavigationBar.js' 
import Submenu from './Components/Submenu.js'
import News from './Components/News.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {
 
 
 return (
   <>
   

   <BrowserRouter>
   <div>
   <NavigationBar/>
   </div>
   <Submenu/>
      <Routes>
         
         <Route exact path="/" element={<News key="general" name="general"/>}/>
         <Route exact path="business" element={<News key="business" name="business"/>}/>
         <Route  exact path="entertainment" element={<News key="entertainment" name="entertainment"/>}/>
         <Route  exact path="sports" element={<News key="sports" name="sports"/>}/>
         <Route  exact path="health" element={<News key="health" name="health"/>}/>
         <Route  exact path="science" element={<News key="science" name="science"/>}/>
         <Route exact path="sports" element={<News key="sports" name="sports"/>}/>
         <Route exact path="technology" element={<News key="technology" name="technology"/>}/>
      </Routes>
    </BrowserRouter>
   </>
  
  );
}

export default App;
