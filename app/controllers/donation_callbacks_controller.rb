class DonationCallbacksController < ApplicationController
  def show
    @game = Game.find_by(id: session[:game_id]) #.first_or_initialize(counter: 17800)
    @game ||= Game.create(counter: GlobalNumber.last.infected)
    session[:game_id] = @game.id

    @game.donations ||= {}
    @game.donations[params[:donation_token]] = params[:amount].to_i
    @game.save

    redirect_to game_url(@game, message: "donation_#{params[:amount].to_i}")
  end
end
