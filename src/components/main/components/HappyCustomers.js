import ImagePolaroid from "./global-componets/ImagePolaroid";

const HappyCustomers = () => {
	return (
		<div>
			<ImagePolaroid
				url={"/images/happycustomer-01.jpeg"}
				dogName={"Puppy"}
			/>
			<ImagePolaroid
				url={"/images/happycustomer-02.jpeg"}
				dogName={"Fuffi"}
			/>
			<ImagePolaroid
				url={"/images/happycustomer-03.jpeg"}
				dogName={"Pongo"}
			/>
			<ImagePolaroid
				url={"/images/happycustomer-04.jpeg"}
				dogName={"Pluto"}
			/>
			<ImagePolaroid
				url={"/images/happycustomer-05.jpeg"}
				dogName={"Birba"}
			/>
			<p>Image</p>
		</div>
	);
};

export default HappyCustomers;
