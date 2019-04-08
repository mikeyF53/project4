# frozen_string_literal: true

Rails.application.routes.draw do
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