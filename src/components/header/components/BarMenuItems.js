/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import styles from "./barmenuitems.module.css";

const BarMenuItems = () => {
	const [isHamburgerEnable, setIsHamburgerEnable] = useState(false);

	const scrollToSection = (anchor) => {
		window.location.href = `#${anchor}`;
	};

	return (
		<div className={styles.main_container}>
			<div
				className={`${isHamburgerEnable ? "" : styles.hamburger_disable} ${
					styles.container_links
				}`}>
				<a onClick={() => scrollToSection("about-us-section")}>Su di noi</a>
				<a onClick={() => scrollToSection("our-services-section")}>
					I nostri servizi
				</a>
				<a onClick={() => scrollToSection("our-products-section")}>
					I nostri prodotti
				</a>
				<a onClick={() => scrollToSection("happy-customer-section")}>
					Clienti felici
				</a>
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
