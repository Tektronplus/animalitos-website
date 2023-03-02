import "./App.css";
import FooterComponent from "./components/footer/FooterComponent";
import HeaderComponent from "./components/header/HeaderComponent";
import MainComponent from "./components/main/MainComponent";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <MainComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
