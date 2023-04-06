import styles from "./main-component.module.css";
import AboutUs from "./components/AboutUs";
import OurServices from "./components/OurServices";
import OurProducts from "./components/OurProducts";
import HappyCustomers from "./components/HappyCustomers";

const MainComponent = () => {
	return (
		<div className={styles.container}>
			<AboutUs />
			<OurServices />
			<OurProducts />
			<HappyCustomers />
		</div>
	);
};

export default MainComponent;
