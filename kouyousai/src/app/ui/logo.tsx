import Image from "next/image";
import localImage from "@/img/cINemaTTiC-logo.jpg";

export default function Logo() {
	return (
		<div className="flex justify-center items-center">
			<Image
				src={localImage}
				alt="cINemaTTiC-logo"
				width={200}
				height={200}
			/>
		</div>
	)
}