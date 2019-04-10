# frozen_string_literal: true

Rails.application.routes.draw do
  post 'user_token' => 'user_token#create'
  post '/users/login', to: 'users#login'
  
  resources :users do
    resources :lessons
    resources :progresses
  end
  resources :lessons do
    resources :exercises
  end
  resources :exercises do
    resources :progresses
  end
end
