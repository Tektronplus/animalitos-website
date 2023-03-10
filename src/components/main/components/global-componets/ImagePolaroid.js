import styles from "./image-polaroid.module.css";

const ImagePolaroid = ({ url, dogName }) => {
	const photoStyle = {
		backgroundImage: `
		linear-gradient(0deg,rgba(0, 0, 0, 0.5) 0%,rgba(0, 0, 0, 0) 2%),
		linear-gradient(90deg,rgba(0, 0, 0, 0.5) 0%,rgba(0, 0, 0, 0) 2%),
		linear-gradient(180deg,rgba(0, 0, 0, 0.5) 0%,rgba(0, 0, 0, 0) 2%),
		linear-gradient(270deg,rgba(0, 0, 0, 0.5) 0%,rgba(0, 0, 0, 0) 2%),
		url(${url})`,
	};

	return (
		<div className={styles.main_container}>
			<div
				className={styles.container_photo}
				style={photoStyle}></div>
			<div className={styles.container_name}>
				<span className={styles.dog_name}>{dogName}</span>
			</div>
		</div>
	);
};

export default ImagePolaroid;
