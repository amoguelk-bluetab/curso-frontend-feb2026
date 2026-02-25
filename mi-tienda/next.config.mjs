/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			// Para iconos de usuarios
			{ protocol: "https", hostname: "dummyjson.com", pathname: "/icon/**" },
			// Para fotos de productos
			{
				protocol: "https",
				hostname: "cdn.dummyjson.com",
				pathname: "/product-images/**",
			},
		],
	},
};

export default nextConfig;
