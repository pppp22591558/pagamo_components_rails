class HomeController < ApplicationController
  def index
    @productByCategory = Category.all
    @products = Product.all
  end
end
