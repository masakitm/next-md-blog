import * as React from "react";
import * as ReactMarkdown from "react-markdown";

const Template = props => {
	const { markdown } = props 

	return (
		<div>
			<ReactMarkdown source={markdown} />
		</div>
	);
}

export default Template;
