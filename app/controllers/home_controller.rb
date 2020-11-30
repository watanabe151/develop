class HomeController < ApplicationController
  def top
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
        flash[:notice] = 'ログインしました'
        session[:user_id] = @user.id
        @currentuser = @user
        render 'about'
    else
        render 'top'
    end
  end

  def about
  end

  def login
    @user = User.find_by(email: params[:email])
    if @user
      if  @user.authenticate(params[:password])
        flash[:notice] = "ログインしました"
        session[:user_id] = @user.id
        @current_user = @user
        render 'about'
      else
        @error_message = 'パスワードが間違っています'
        render 'top'
      end
    else
      @error_message = 'メールアドレスが登録されていません'
      render 'top'
    end
  end

  def logout
    flash[:notice] = "ログアウトしました"
    session[:user_id] = nil
    redirect_to("/")
  end

private
    def user_params
        params.require(:user).permit(:name, :email, :password, :password_confirmation, :check)
    end
end
