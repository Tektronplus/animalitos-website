import ImagePolaroid from "./global-componets/ImagePolaroid";
import styles from "./our-products.module.css";

const OurProducts = () => {
	return (
		<div className={styles.container}>
			<div className={`${styles.title} ${styles.flex}`}>I Nostri Prodotti</div>
			<div className={`${styles.description} ${styles.flex}`}>
				Siamo anche appassionati di sostenibilità e dell'ambiente. Per questo
				motivo, utilizziamo prodotti ecologici e tecniche di toelettatura
				sostenibili, riducendo al minimo l'impatto ambientale del nostro
				negozio.
			</div>
			<div className={`${styles.photo} ${styles.flex}`}>
				<ImagePolaroid url={"/images/our-products.jpeg"} />
			</div>
		</div>
	);
};

export default OurProducts;
