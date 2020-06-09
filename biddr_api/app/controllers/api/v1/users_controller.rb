class Api::V1::UsersController < ApplicationController

def current
    render json:current_user
end

def create
    user = User.new user_params
    if user.save
        session[:user_id] = user.id
render json: {id: user.id}
    else
        render json:{ errors: user.errors.full_messages}, status:422
    end
end

def index
    users = User.order(created_at: :desc)
    render(json: users)
end

def show
    if @user
        render(
            json: @user,
            include:[:author, {bids: [:author]}]
        )

    else
        render(json: {error: 'User Not Found'})
    end
end

private

def user_params
    params.require(:user)
    .permit(
        :first_name,
        :last_name,
        :email,
        :password,
        :password_confirmation
    )
end

def find_user
    @user ||= User.find params[:id]
end

def record_not_found
    render(
      json: { status: 422, errors: {msg: 'Record Not Found'}},
      status: 422
    )
  end

  def record_invalid(error) 
    invalid_record = error.record 
    errors = invalid_record.errors.map do |field, message|
    {
      type: error.class.to_s, 
      record_type: invalid_record.class.to_s,
      field: field,
      message: message
    }
    end
    render(
      json: { status: 422, errors: errors }
    )
  end
    end