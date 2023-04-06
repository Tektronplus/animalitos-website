import styles from "./barmenu.module.css";
import BarMenuItems from "./BarMenuItems";
import BarMenuLogo from "./BarMenuLogo";
import BarMenuName from "./BarMenuName";

const BarMenu = () => {
	return (
		<div className={styles.container}>
			<BarMenuLogo className={styles.logo} />
			<BarMenuName className={styles.title} />
			<BarMenuItems className={styles.links} />
		</div>
	);
};

export default BarMenu;
