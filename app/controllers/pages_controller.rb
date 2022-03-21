class PagesController < ApplicationController
  before_action :find_story, only: [:show]

  def index
    @stories = Story.published_stories_update
    @newest_story = Story.published_stories.limit(1)
    @newest_story_from_number2 = Story.published_stories.limit(3).offset(1)

    @stories_most_clap = Story.published_stories_order_clap.limit(5)
    @story_most_clap = Story.published_stories_order_clap.limit(1)

  end

  def show
    @comment = @story.comments.new
    @comments = @story.comments.order(id: :desc)
    
  end

  def user
    @stories = User.find_by_username(params[:username]).stories.published
  end

  private

  def find_story
    @story = Story.friendly.find(params[:story_id])
  end
end
