const scrollToAnchor = (anchorName) => {
	if (anchorName) {
		let anchorElement = document.getElementById(anchorName);
		if (anchorElement) {
			anchorElement.scrollIntoView({
				block: "start",
				behavior: "instant",
			});
		}
	}
};

export default scrollToAnchor