var checkoutPage = React.createClass({
  render: function(){
    return(
      <div className="checkout-page">
        <div className="checkout-process">
          <div className="process-bar"></div>
          <div className="process process-1">
            <div className="circle circle-1"></div>
            <h4>Step1<br/> Verify your purchase details</h4>
          </div>
          <div className="process process-2">
            <div className="circle circle-2"></div>
            <h4>Step2<br/> Fill in the payment details</h4>
          </div>
          <div className="process process-3">
            <div className="circle circle-3"></div>
            <h4>Step3<br/> Sucess</h4>
          </div>
        </div>
        <div className="product-list">
          <Plans/>
        </div>
        <div className="checkout-panel">
        </div>
      </div>
    )
  }
});
