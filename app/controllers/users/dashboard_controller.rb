class Users::DashboardController < ApplicationController
  before_action :set_current_user, only: [:get_current_user]

  def index
  end

  def get_current_user
    render json: @user
  end

  private
    def set_current_user
      @user = current_user
    end
end
