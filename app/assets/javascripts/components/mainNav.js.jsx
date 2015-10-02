var MainNav = React.createClass({
  propTypes: {
    logo: React.PropTypes.string,
    icons: React.PropTypes.array
  },
  componentDidMount: function(){
    $(document).ready(function(){
      $('.main-nav').sticky();
    });
  },
  render: function(){
    return(
      <div className="main-nav">
        <div className="nav-content">
          <RoleOptions roleImg={this.props.roleImg}/>
          <div className="nav-logo">
            <a href="/"><img src={this.props.logo} alt="PaGamO logo"/></a>
          </div>
          <UserPanel icons = {this.props.icons}/>
          <HiddenSideBar/>
        </div>
      </div>
    )
  }
});

var RoleOptions = React.createClass({
  getInitialState: function(){
    return{
      activeRole: 'Student'
    }
  },
  componentDidMount: function(){
    var e = this;
    $('.role-options li img:first').addClass('active');
    $('.role-options li img').click(function(){
      $('.role-options li img').removeClass('active');
      $(this).addClass('active');
      e.state.activeRole === 'Student'? e.setState({activeRole:'Teacher'}): e.setState({activeRole: 'Student'});
    });
  },
  render: function(){
    var roles = this.props.roleImg.map(function(img, index){
      return(
        <li><a href="#"><img onClick={this.handleClick} src={img}/></a></li>
      )
    });
    return(
      <ul className="role-options">
        {roles}
        <li><h5><span className="role">Role:</span> {this.state.activeRole}</h5></li>
      </ul>
    )
  }
});

var UserPanel = React.createClass({
  componentDidMount: function(){
    var $popup = $('ul.user-panel .purchase-cart .cart-popup');
    $('ul.user-panel .purchase-cart').hover(function(){
      $popup.toggleClass('active').queue(function(){});
    });
  },
  render: function(){
    return(
      <ul className="user-panel">
        <li><a href="#"><img src={this.props.icons[0]}/></a></li>
        <li className="purchase-cart">
          <a href="#"><img src={this.props.icons[1]}/></a>
          <div className="cart-popup"></div>
        </li>
        <li><h5><a href="#">Hi, Neil</a></h5></li>
      </ul>
    )
  }
});

var HiddenSideBar = React.createClass({
  render: function(){
    var style = {
      position: 'fixed',
      right: '0',
      paddingRight: '30px',
      paddingLeft: '30px',
      zIndex: '10',
      bottom: '0',
      top: '0',
      background: 'gainsboro',
      right: '-150px;'
    }
    return(
      <div style={style} className="hidden-sidebar">
        <ul>
          <li>list item 1</li>
          <li>list item 2</li>
          <li>list item 3</li>
          <li>list item 4</li>
          <li>list item 5</li>
        </ul>
      </div>
    )
  }
});
