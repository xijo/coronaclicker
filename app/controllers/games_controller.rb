class GamesController < ApplicationController
  def new
    @game = Game.create(counter: GlobalNumber.last.infected)
    session.clear
    cookies[:counter] = GlobalNumber.last.infected
    redirect_to game_url(@game)
  end

  def show
    @game = Game.find(params[:id]) #.first_or_initialize(counter: 17800)
    @global_number = GlobalNumber.last
    session[:game_id] = @game.id
  end
end
