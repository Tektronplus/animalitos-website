import styles from "./barmenulogo.module.css";

const BarMenuLogo = () => {
	return (
		<div>
			<img
				className={styles.logo}
				src="/logo.png"
				alt=""
			/>
		</div>
	);
};

export default BarMenuLogo;
