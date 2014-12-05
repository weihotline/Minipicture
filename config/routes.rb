Rails.application.routes.draw do
  root to: "static_pages#root"

  resource :session, only: [:new, :create, :destroy]
  resources :users, only: [:new, :create, :edit, :update] do
    get "search", on: :collection
  end

  namespace :api, defaults: { format: :json } do
    resources :images, only: [:create, :index, :show]
    resources :comments, only: [:create, :show, :destroy]
    resources :follows, only: [:index, :create, :destroy]
    resources :likes, only: [:index, :create, :destroy]
    resources :image_collections, only: [:index]
  end
end