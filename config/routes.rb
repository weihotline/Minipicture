Rails.application.routes.draw do
  root to: "static_pages#root"

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :images, only: [:create, :index, :show]
    resources :comments, only: [:create, :show, :destoy]
  end
end