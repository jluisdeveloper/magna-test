Rails.application.routes.draw do
  devise_for :admins
  devise_scope :admin do
    authenticated :admin do
      namespace :admins do
        get 'pages/admin', as: :authenticated_root
      end
    end
  end

  devise_for :users
  devise_scope :user do
    authenticated :user do
      namespace :users do
        get 'pages/user', as: :authenticated_root
      end
    end
    unauthenticated :user do        
      root 'devise/sessions#new', as: :unauthenticated_root      
    end
  end
end
