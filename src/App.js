import "./App.css";
import FirstPage from "./components/FirstPage";
import AboutUs from "./components/AboutUs";
import LatestArticles from "./components/LatestArticles";
import { ChakraProvider } from '@chakra-ui/react'
import Footer from "./components/Footer";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <div>
          <FirstPage />
        </div>
        <div className="h-[653px]">
          <AboutUs />
        </div>
        <div>
          <LatestArticles />
        </div>
        <div className="mt-16 bg-blue-50">
          <Footer />
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
