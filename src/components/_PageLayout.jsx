

// this.props.children <- class component way to access children

export default function PageLayout({children}){

	// eslint-disable-next-line react-hooks/purity
	let copyrightYear = new Date(Date.now()).getFullYear();

	return(
		// <div> is element
		// <> is fragment
		// React only wants one element, that element can contain children
		// but it must only be one top-level element in the return!!!!
		<>
			<header>
				<h1>Website title here</h1>
			</header>

			{/* // some way to access child components goes here */}
			{children}

			<footer>
				<p>Company Name &copy; {copyrightYear}</p>
			</footer>
		</>
		
	)
}