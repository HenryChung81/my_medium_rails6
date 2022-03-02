Rails.application.routes.draw do
  devise_for :users

  resource :stories

  root 'pages#index'
end
