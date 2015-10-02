var productPage = React.createClass({
  render: function(){
    return(
      <div className="product-page-wrapper">
        <ProductHeader productName='Test' panelImg={this.props.panelImg}/>
        <Plans planData={this.props.planData}/>
        <CheckoutArea/>
        <ProductRecommendation productsToRecommend = {this.props.productsToRecommend}/>
      </div>
    )
  }
});

var ProductHeader = React.createClass({
  render: function(){
    return(
      <div className="product-header">
        <div className="course-img">
          <ItemImg productName={this.props.productName}/>
        </div>
        <div className="course-description">
          <h2>Pearson</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="course-actions">
          <ul>
            <li><a href="#"><img src={this.props.panelImg[0]}/><h5>Join Map</h5></a></li>
            <li><a href="#"><img src={this.props.panelImg[1]}/><h5>Use Pacode</h5></a></li>
            <li><a href="#"><img src={this.props.panelImg[2]}/><h5>Tutorial</h5></a></li>
          </ul>
        </div>
      </div>
    )
  }
});

var Plans = React.createClass({
  getInitialState: function(){
    return{
      totalAmount: 10
    }
  },
  getTotal: function(value, id){
    $('.total-amount#'+ id).html(value*10);
  },
  render: function(){
    var checkBoxCell = {
      paddingLeft: '16px'
    };
    var planRows = this.props.planData.map(function(plan, index){
      return(
        <tr>
          <td style={checkBoxCell}><CheckBox id={index}/></td>
          <td>{plan.textbook}</td>
          <td>${plan.price}</td>
          <td><SelectBox getResult = {this.getTotal}></SelectBox></td>
          <td><MultiSelectBox id={1}/></td>
          <td className="total-amount" id={index}>10</td>
        </tr>
      )
    }.bind(this));
    return(
      <div className="plans">
        <table>
          <tr>
            <th className="select">Select</th>
            <th className="text-book">Textbook</th>
            <th className="price">Price</th>
            <th className="plan">Plan</th>
            <th className="add-to-classes">Add to Classes</th>
            <th className="total">Total</th>
          </tr>
          {planRows}
        </table>
      </div>
    )
  }
});

var CheckoutArea = React.createClass({
  render: function(){
    return(
      <div className="check-out">
        <ul>
          <li className="checkout-price">
            <h5><span className="price">$120</span><span className="total">in total</span></h5>
          </li>
          <li className="checkout-actions">
            <div className="checkout-btn btn-left">
              <a href="/checkout"><i className="fa fa-plus"></i><h4>Add To Cart</h4></a>
            </div>
            <div className="checkout-btn btn-right">
              <a href="/checkout"><i className="fa fa-check"></i><h4>Checkout</h4></a>
            </div>
          </li>
          <li className="checkout-cart">
            <a href="#"><h5>Enter My Cart</h5></a>
          </li>
        </ul>
      </div>
    )
  }
});

var ProductRecommendation = React.createClass({
  componentDidMount: function(){
    $('.product-recommendation ul li').hover(function(){
      $(this).toggleClass('active');
    });
  },
  render: function(){
    var recommendations = this.props.productsToRecommend.map(function(product, index){
      return(
        <li key={index}>
          <a href="#"><h5>Product - {index + 1}</h5></a>
          <ItemImg imgSrc={product}/>
        </li>
      )
    });
    return(
      <div className="product-recommendation">
        <h3>YOU MIGHT ALSO LIKE ...</h3>
        <ul>
          {recommendations}
        </ul>
      </div>
    )
  }
});
