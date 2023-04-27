import styles from "./happycustomers.module.css";
import ImagePolaroid from "./global-componets/ImagePolaroid";

const HappyCustomers = () => {
	return (
		<div
			id="happy-customer-section"
			className={styles.container}>
			{jsonData.map((dogPhoto) => (
				<ImagePolaroid
					className={styles.photo}
					url={dogPhoto.url}
					dogName={dogPhoto.dogName}
				/>
			))}
		</div>
	);
};

export default HappyCustomers;

const jsonData = [
	{
		url: "/images/happycustomer-01.jpeg",
		dogName: "Puppy",
	},
	{
		url: "/images/happycustomer-02.jpeg",
		dogName: "Fuffi",
	},
	{
		url: "/images/happycustomer-03.jpeg",
		dogName: "Pongo",
	},
	{
		url: "/images/happycustomer-04.jpeg",
		dogName: "Pluto",
	},
	{
		url: "/images/happycustomer-05.jpeg",
		dogName: "Birba",
	},
];
