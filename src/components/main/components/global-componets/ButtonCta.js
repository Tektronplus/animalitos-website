import styles from "./button-cta.module.css";

const ButtonCta = ({ label, funcButton }) => {
	return (
		<button
			className={styles.button_cta}
			onClick={funcButton}>
			{label}
		</button>
	);
};

export default ButtonCta;
