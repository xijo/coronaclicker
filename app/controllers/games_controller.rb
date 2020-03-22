class GamesController < ApplicationController
  # Create a new game, reset session and counter in cookie.
  # Then redirect to the new game instance
  def new
    @game = Game.create(counter: GlobalNumber.last.infected)
    session.clear
    cookies[:counter] = GlobalNumber.last.infected
    redirect_to game_url(@game)
  end

  # Show the game instance for the given game_id.
  # Raises 404 if none was found.
  def show
    @game = Game.find(params[:id])
    @global_number = GlobalNumber.last
    session[:game_id] = @game.id
  end
end
