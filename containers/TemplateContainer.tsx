import * as React from "react";
import { withRouter } from "next/router";
import Template from "../components/Template";

interface data {
  bodyContent?: string;
  bodyHtml?: string;
  title?: string;
  dir?: string;
  base?: string;
  ext?: string;
  sourceBase?: string;
  sourceExt?: string;
}

interface Props {
  router?: any;
}

interface State {
  data: data;
}

const Enhance = Component => withRouter(
  class extends React.Component<Props, State> {
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
			this.asyncData()
    }

    render() {
      return (
        <Component markdown={this.state.data.bodyContent} />
      );
    }
	}
);

const TemplateContainer = Enhance(Template);

export default TemplateContainer;
