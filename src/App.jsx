import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import MainContent from "./components/MainContent/MainContent";
import Team from "./components/Team/Team";
import Contact from "./components/Contact/Contact";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PetsProvider } from "./context/PetsContext";
import { FormProvider } from "./context/FormAddPetContext";
import { SharedProvider } from "./context/SharedContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { FormAdoptPetProvider } from "./context/FormAdoptPetContext";
import CardDetails from "./components/CardDetails/CardDetails";

function App() {

  return (
    <SharedProvider>
      <FormProvider>
        <FormAdoptPetProvider>
          <PetsProvider>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
              <div className="App">
                <Header />
                <div className="app-row">
                  <Sidebar />
                  <Routes>
                    <Route path="/" element={<MainContent />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/pets/:cardId" element={<CardDetails />} />
                  </Routes>
                </div>
                <Footer />
              </div>
            </BrowserRouter>
          </PetsProvider>
        </FormAdoptPetProvider>
      </FormProvider>
    </SharedProvider>
  );
}

export default App;
