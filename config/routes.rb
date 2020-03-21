Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resource :donation_callback, only: [:show]
  resources :games, only: [:show, :new]

  root to: 'home#show'
end
