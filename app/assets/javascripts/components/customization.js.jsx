var SearchBar = React.createClass({
  render: function(){
    return(
      <input className="search-bar" placeholder="Enter keywords"></input>
    )
  }
});

var CheckBox = React.createClass({
  render: function(){
    return(
      <div className="check-box">
        <input type="checkbox" id={"check-box-" + this.props.id} defaultChecked={this.props.defaultChecked}></input>
        <label htmlFor={"check-box-" + this.props.id}>
          <span className="check">
            <span className="check-icon">
              <i className="fa fa-check"></i>
            </span>
          </span>
          {this.props.children}
        </label>
      </div>
    )
  }
});

var SelectBox = React.createClass({
  getDefaultProps: function(){
    return{
      selectOptions: [
        {value: 1, text: '1 month'},
        {value: 2, text: '2 months'},
        {value: 3, text: '3 months'},
        {value: 6, text: '6 months'},
        {value: 12, text: '1 year'}
      ]
    }
  },
  getInitialState: function(){
    return{
      active: true,
      optionState: 'none',
      option: '1 month'
    }
  },
  clickHandler: function(){
    this.setState({
      active: !this.state.active
    });
    if (!this.state.active){
      this.setState({
        optionState: 'none'
      });
    }else{
      this.setState({
        optionState: 'block'
      });
    }
  },
  setOption: function(newOption){
    this.setState({
      option: newOption
    });
    this.clickHandler();
  },
  render: function(){
    var optionStyle = {
      display: this.state.optionState
    };
    var options = this.props.selectOptions.map(function(option, index){
      return(
        <SelectLi key={index} setOption={this.setOption} getResult={this.props.getResult} quantity={option.value}>{option.text}</SelectLi>
      )
    }.bind(this));
    return(
      <div className="select-box">
        <div className="items-select" onClick={this.clickHandler}>
          <h5>{this.state.option}
            <i className="fa fa-caret-down"></i>
          </h5>
        </div>
        <ul style={optionStyle}>
          {options}
        </ul>
      </div>
    )
  }
});

var SelectLi = React.createClass({
  propTypes: {
    setOption: React.PropTypes.func.isRequired
  },
  clickHandler: function(e){
    this.props.setOption($(e.target).html());
    console.log($(e.target));
    this.props.getResult(this.props.quantity);
  },
  render: function(){
    return(
      <li onClick={this.clickHandler}>{this.props.children}</li>
    )
  }
});


var MultiSelectBox = React.createClass({
  getInitialState: function() {
    return {
      active: true,
      optionState: 'none'
    }
  },
  getDefaultProps: function(){
    return{
      courseOptions: [
        {name: 'Course1', student: 20},
        {name: 'Course2', student: 32},
        {name: 'Course3', student: 36},
        {name: 'Course4', student: 14},
        {name: 'Course5', student: 25}
      ]
    }
  },
  clickHandler: function(e){
    this.setState({
      active: !this.state.active
    });
    if (!this.state.active){
      this.setState({
        optionState: 'none'
      });
    }else{
      this.setState({
        optionState: 'block'
      });
    }
  },
  onChildChange: function(){
    this.clickHandler();
  },
  render: function() {
    var options = this.props.courseOptions.map(function (option, index) {
      return(
        <li key={index}>
          <CheckBox id={"course-" + index + Math.random() } defaultChecked={true}>{option.name}</CheckBox>
          <span className="student-num">{option.student} Students</span>
        </li>
      )
    });
    var optionStyle = {display: this.state.optionState};
    return (
      <div className="multi-select-box" id={"multi-"+this.props.id}>
        <div className="items-select" onClick={this.clickHandler}>
          <h5>All My Classes
            <i className="fa fa-caret-down"></i>
            <span className="student-num">120 Students</span>
          </h5>
        </div>
        <ul className="course-options" style={optionStyle}>
          {options}
          <li className="btn-li">
            <BtnSmall callbackParent={this.onChildChange} color="#FFBC4D">Confirm</BtnSmall>
          </li>
        </ul>
      </div>
    );
  }
});

var BtnSmall = React.createClass({
  handleClick: function(){
    this.props.callbackParent();
  },
  render: function(){
    var btnStyle = {
      color: this.props.color
    };
    return(
      <div className="btn-small">
        <button style={btnStyle} onClick={this.handleClick}>{this.props.children}</button>
      </div>
    )
  }
});
