import styles from "./App.module.css";
import FooterComponent from "./components/footer/FooterComponent";
import HeaderComponent from "./components/header/HeaderComponent";
import MainComponent from "./components/main/MainComponent";

function App() {
	return (
		<div className={styles.container}>
			<HeaderComponent />
			<MainComponent />
			<FooterComponent />
		</div>
	);
}

export default App;
