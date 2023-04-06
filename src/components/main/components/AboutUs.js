import styles from "./aboutus.module.css";
import ButtonCta from "./global-componets/ButtonCta";

const AboutUs = () => {
	return (
		<div className={styles.container}>
			<div className={`${styles.slogan} ${styles.flex} ${styles.text_border}`}>
				"Dal pelo alla coda, noi ci prendiamo cura del tuo cane"
			</div>
			<div className={`${styles.title} ${styles.flex}`}>Su di noi</div>
			<div className={styles.description}>
				Benvenuti nel nostro negozio di toelettatura di cani! Siamo un team di
				amanti degli animali che credono che ogni cane meriti di essere
				coccolato e curato con attenzione. La nostra missione è quella di
				fornire un servizio di toelettatura di alta qualità, che non solo
				migliora l'aspetto del tuo cane, ma anche il suo benessere e la sua
				salute.
			</div>
			<div className={`${styles.call_out} ${styles.flex}`}>
				<ButtonCta label="Contattaci" />
			</div>
		</div>
	);
};

export default AboutUs;
