import styles from "./heroimage.module.css";

const urlImage = {
	backgroundImage: "url(/images/hero-image.jpg)",
};

const HeroImage = () => {
	return (
		<div
			style={urlImage}
			className={styles.container}></div>
	);
};

export default HeroImage;
