class PagesController < ApplicationController

  def index
    @stories = Story.all.order(created_at: :desc).includes(:user)

  end

  def show
    
  end

  def user
    
  end
end
