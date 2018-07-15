import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
	render() {
		const { __NEXT_DATA__ } = this.props;
		const { assetPrefix } = __NEXT_DATA__;
		const stylesheet = `${assetPrefix}/_next/static/style.css`;

		return (
			<html>
				<Head>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1, shrink-to-fit=no"
					/>
					<meta http-equiv="x-ua-compatible" content="ie=edge" />

					<title>Canada</title>

					<link
						rel="stylesheet"
						href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.css"
					/>

					<style>{`
						html {
							box-sizing: border-box;
						}
						*, *:before, *:after {
							box-sizing: inherit;
						}
						b {
							font-weight: normal;
							display: block;
						}
						i {
							font-style: normal;
							display: inline-block;
						}
					`}</style>
					<link rel="stylesheet" href={stylesheet} />
					<link
						href="https://fonts.googleapis.com/css?family=Eczar:400,700|Open+Sans:300,400,700"
						rel="stylesheet"
					/>
					<script src="https://cdn.polyfill.io/v2/polyfill.min.js" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
