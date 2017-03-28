const React = require("react");
const ReactDOM = require("react-dom");

class PageForm extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className="row">
        <div className="col-xs-12 text-left"> <h4 id="PageNumber"> </h4></div>
        <div className="col-xs-12">
          <div className="form-group">
            <label htmlFor="Page Text"> Page Text</label>
            <div className="text-right">
              <div className="button-group" role="group">
                <button onClick={this.props.fncs.newPage.bind(this.props.fncs)} type="button" className="btn btn-primary page-form pageform-button"> New Page <i class="fa fa-floppy-o" aria-hidden="true"></i> </button>
                <button onClick={this.props.fncs.deletePage.bind(this.props.fncs)} type="button" className="btn btn-primary page-form pageform-button"> Delete Page <i class="fa fa-floppy-o" aria-hidden="true"></i> </button>
              </div>  
            </div>  
            <textarea name="Page-Text" id="pageTextInfo" cols="30" rows="10" className="form-control" placeholder="Page Text"></textarea>
          </div>
          <div className="text-center">
            <div className="button-group" role="group">
              <button onClick={this.props.fncs.gotoPreviousPage.bind(this.props.fncs)}type="button" className="btn btn-primary page-form pageform-button"><i class="fa fa-arrow-left" aria-hidden="true"></i> Previous Page</button>
              <button onClick={this.props.fncs.saveEdit.bind(this.props.fncs)} type="button" className="btn btn-primary page-form pageform-button"> Save Page <i class="fa fa-floppy-o" aria-hidden="true"></i> </button>
              <button onClick={this.props.fncs.gotoNextPage.bind(this.props.fncs)} type="button" className="btn btn-primary page-form pageform-button">Next Page <i class="fa fa-arrow-right" aria-hidden="true"></i></button>
            </div>
          </div>
          </div>
      </div>
    );
  }

}

exports.PageForm = PageForm;