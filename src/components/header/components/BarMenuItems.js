import { useState } from "react";
import styles from "./barmenuitems.module.css";

const BarMenuItems = () => {
	const [isHamburgerEnable, setIsHamburgerEnable] = useState(false);
	return (
		<div className={styles.main_container}>
			<div
				className={`${isHamburgerEnable ? "" : styles.hamburger_disable} ${
					styles.container_links
				}`}>
				<a href="#/">Su di noi</a>
				<a href="#/"> I nostri servizi</a>
				<a href="#/"> I nostri prodotti</a>
				<a href="#/"> I nostri servizi</a>
			</div>
			<button
				onClick={() => setIsHamburgerEnable(!isHamburgerEnable)}
				className={styles.hamburger_button}>
				=
			</button>
		</div>
	);
};

export default BarMenuItems;
