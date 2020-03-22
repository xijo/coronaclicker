class GamesController < ApplicationController
  # Create a new game, reset session and counter in cookie.
  # Then redirect to the new game instance
  def new
    game_id = session[:game_id]
    @game = Game.find_by(id: game_id) || Game.create(counter: GlobalNumber.last.infected)
    cookies[:counter] ||= GlobalNumber.last.infected
    redirect_to game_url(@game)
  end

  # Show the game instance for the given game_id.
  # Raises 404 if none was found.
  def show
    @game = Game.find(params[:id])
    @global_number = GlobalNumber.last
    @decrementer = @game.decrementer
    @decrementer += @global_number.decrementer if @game.donations.present?
    session[:game_id] = @game.id
  end
end
