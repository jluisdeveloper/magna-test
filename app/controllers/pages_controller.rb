class PagesController < ApplicationController
  def admin
  end

  def user
  end

  def index
    redirect_to '/admins/dashboard/index' if current_admin
    redirect_to '/users/dashboard/index' if current_user
    redirect_to '/users/sign_in' if !current_admin && !current_user
  end
end
