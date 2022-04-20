class Admins::DashboardController < ApplicationController
  before_action :set_current_admin, only: [:get_current_admin]

  def index
  end

  def get_current_admin
    render json: @admin
  end

  private
    def set_current_admin
      @admin = current_admin
    end
end
