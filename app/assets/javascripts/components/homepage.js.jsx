//homepage thats display products and featured functions
var Homepage = React.createClass({
  propTypes: {
    currentWorld: React.PropTypes.string,
    bannerImgSrc: React.PropTypes.string,
    panelImg: React.PropTypes.array,
    productByCategory: React.PropTypes.array,
    products: React.PropTypes.array
  },
  render: function(){
    return(
      <div className="homepage-wrapper">
        <ContinueGame world = {this.props.currentWorld} />
        <MainBanner bannerImg = {this.props.bannerImgSrc} panelImg = {this.props.panelImg} />
        <ProductContent productByCategory = {this.props.productByCategory}  products = {this.props.products}/>
      </div>
    )
  }
});

//to continue the current game
var ContinueGame = React.createClass({
  render: function(){
    return(
      <div className="continue-game">
        <h4>Continue game in {this.props.world}</h4>
      </div>
    )
  }
});

//showing a banner slider and most-used features
var MainBanner = React.createClass({
  render: function(){
    return(
      <div className="main-banner">
        <div className="main-panel">
          <img src={this.props.bannerImg}></img>
          <FeaturePanel panelImg={this.props.panelImg}/>
        </div>
      </div>
    )
  }
});

//most-used features panel
var FeaturePanel = React.createClass({
  render: function(){
    return(
      <ul className="feature-panel">
        <li><img src = {this.props.panelImg[0]}/><h4>Join a Course</h4></li>
        <li><a href="/tutorials"><img src = {this.props.panelImg[1]}/><h4>Tutorials</h4></a></li>
        <li><img src = {this.props.panelImg[2]}/><h4>Create Course</h4></li>
        <li><img src = {this.props.panelImg[3]}/><h4>My Courses</h4></li>
      </ul>
    )
  }
});

//product content wrapper
var ProductContent = React.createClass({
  render: function(){
    return(
      <div className="product-content-wrapper">
        <div className="product-content">
          <ProductFilter filterNames = {this.props.productByCategory}/>
          <Products filterNames = {this.props.productByCategory} products = {this.props.products}/>
        </div>
      </div>
    )
  }
});

//filter filtering the products
var ProductFilter = React.createClass({
  componentDidMount: function(){
    $(document).ready(function(){
      $('.filter-wrapper').sticky({topSpacing:60});
    });
  },
  render: function(){
    var filterName = this.props.filterNames.map(function(filter, index){
      return(
        <li key = {index} className="filter-title">
          <CheckBox id= {"filter-" + index} defaultChecked={true}>
            {filter.name}
          </CheckBox>
        </li>
      )
    });
    return(
      <div className="filter-wrapper">
        <ul className="product-filter">
          <li className="filter-title">
            <h3>Search</h3>
          </li>
          <li className="filter-search">
            <SearchBar/>
          </li>
          <li className="filter-title">
            <h3>Category</h3>
          </li>
          {filterName}
        </ul>
      </div>
    )
  }
});

//all the product display
var Products = React.createClass({
  render: function(){
    var allProducts = this.props.products;
    var productByCategory = this.props.filterNames.map(function(filter, index){
      var products = allProducts.map(function(product, index){
        return(
          product.category_id === filter.id?
          <li key= {product.id} className="product-cell">
            <ItemImg productName={product.name}/>
            <a href="#"><h5>{product.name}</h5></a>
          </li>
          : null
        )
      });
      return(
        <ul key = {index} className="product-row">
          <li className="product-title">
            <h3>{filter.name.toUpperCase()}</h3>
          </li>
          {products}
        </ul>
      )
    });
    return(
      <div className="products">
        <div className="products-by-category">
          {productByCategory}
        </div>
      </div>
    )
  }
});

var ItemImg = React.createClass({
  render: function(){
    var style = {
      width: '100px',
      height: '100px',
      borderRadius: '10px'
    };
    return(
      <a href="/product"><img src={this.props.imgSrc} style={style} title= {this.props.productName + "descriptions"}/></a>
    )
  }
});
