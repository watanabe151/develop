Rails.application.routes.draw do
  root 'home#top'
  resources :home

  get "about" => "home#about"
  post "login" => "home#login"
  post "logout" => "home#logout"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
