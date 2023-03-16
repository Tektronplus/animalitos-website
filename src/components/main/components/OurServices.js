import styles from "./our-services.module.css";
import ImagePolaroid from "./global-componets/ImagePolaroid";

const OurServices = () => {
	return (
		<div className={styles.container}>
			<div className={`${styles.title} ${styles.flex}`}>I Nostri Servizi</div>
			<div className={`${styles.description} ${styles.flex}`}>
				Il nostro personale altamente qualificato e appassionato lavora con ogni
				cane con cura e rispetto, creando un'esperienza di toelettatura positiva
				e rilassante per il tuo amico a quattro zampe. Utilizziamo solo prodotti
				di alta qualità e tecniche di toelettatura avanzate, garantendo
				risultati di eccellenza. Siamo orgogliosi di offrire una gamma completa
				di servizi di toelettatura, dalle pulizie di routine ai bagni completi e
				tagli alla moda. Ogni servizio è personalizzato in base alle esigenze
				specifiche del tuo cane, garantendo che riceva l'attenzione che merita.
			</div>
			<div className={`${styles.photo} ${styles.flex}`}>
				<ImagePolaroid url={"/images/our-services.webp"} />
			</div>
		</div>
	);
};

export default OurServices;
