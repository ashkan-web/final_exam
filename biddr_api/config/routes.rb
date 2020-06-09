Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json} do
    namespace :v1 do
      resources :auctions do
        resources :bids, only: [:create, :destroy, :index, :show]
      end
      resource :session, only: [:create, :destroy]
      # /api/v1/users
      resources :users, shallow: true, only: [:create, :new, :show, :index] do
      # api/v1/users/current
        get :current, on: :collection
        # default
        # api/v1/user/:id/current
      end
    end
  end
end
