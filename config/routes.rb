Rails.application.routes.draw do
devise_for :users, controllers: {
        registrations: 'users/registrations'
      }

  resources :stories

  root 'pages#index'
end
