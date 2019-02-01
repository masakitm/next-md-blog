import * as React from "react";
import * as ReactMarkdown from "react-markdown";

const Template = props => {
	const markdown: string = props.markdown 

	return (
		<div>
			{
				markdown ? <ReactMarkdown source={markdown} /> : <div>no entries.</div>
			}
		</div>
	);
}

export default Template;
