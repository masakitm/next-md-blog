import * as React from "react";
import { withRouter } from "next/router";
import * as ReactMarkdown from "react-markdown";

interface data {
	"bodyContent"?: string,
	"bodyHtml"?: string,
	"title"?: string,
	"dir"?: string,
	"base"?: string,
	"ext"?: string,
	"sourceBase"?: string,
	"sourceExt"?: string
}

interface Props {
	router?: any
}

interface State {
	data: data
}

class Template extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      data: {}
    };

    this.asyncData = this.asyncData.bind(this);
  }

  async asyncData() {
    const { id } = this.props.router.query;

    if (!id) {
      return false;
    }

    const data = await require(`../articles/${id}.json`);
    this.setState({
      data
    });
  }

  componentDidMount() {
    this.asyncData();
  }

  render() {
    const { data } = this.state;
    const { id } = this.props.router.query;

    return (
      <div>
        {id ? <ReactMarkdown source={data.bodyContent} /> : <p>no entries</p>}
      </div>
    );
  }
}

export default withRouter(Template);
