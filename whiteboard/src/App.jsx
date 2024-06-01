import { BrowserRouter, Routes, Route } from "react-router-dom";
import PersistentDrawerRight from "./Components/PersistentDrawerRight";
import Login from './pages/Login'
import Home from './pages/Home'
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Note from "./Components/Note";
import Error from "./pages/Error";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./pages/GlobalStyle";
import GoToTop from "./Components/GoToTop";
// import NotesGallery from "./Components/NotesGallery";
import ImageGallery from "./Components/ImageGallery";
// import Workspace from "./Components/Workspace";
import Second from './pages/Second';
import Welcome from "./pages/Welcome";
// import PDFViewer from "./Components/PDFViewer";
// import Footer from "./Components/Footer";

function App() {

  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };

  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <GoToTop/>
        <BrowserRouter>
            
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
                <Route path='*' element={<Error/>}></Route>
                <Route path="/addnote" element={<Note/>}></Route>
                <Route path="/image" element={<ImageGallery/>}></Route>
                <Route path="/welcome" element={<Welcome/>}></Route>
                
            </Routes>
            {/* <Footer/> */}
        </BrowserRouter>
    </ThemeProvider>
    // <Second/>
    // <Note/>
    
  
  );
}

export default App;
