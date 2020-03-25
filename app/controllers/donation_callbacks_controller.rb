class DonationCallbacksController < ApplicationController
  def show
    @game = Game.find(session[:game_id]) #.first_or_initialize(counter: 17800)

    @game.donations ||= {}
    @game.donations[params[:donation_token]] = params[:amount].to_i
    @game.save
    # raise session.id

    #  message 2 oder 5 hinter game
    # window location href -> die zahl oder so raus holen
    # params[:amount].to_i string interpolation
    redirect_to game_url(@game, message: "donation_#{params[:amount].to_i}")

    # redirect_to root_url
    # ?status=DONATION_COMPLETE
    # &amount=6
    # &donation_token=STRING
  end
end
