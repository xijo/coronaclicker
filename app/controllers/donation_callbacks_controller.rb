class DonationCallbacksController < ApplicationController
  def show
    @game = Game.find(session[:game_id]) #.first_or_initialize(counter: 17800)

    @game.donations ||= {}
    @game.donations[params[:donation_token]] = params[:amount]
    @game.save
    # raise session.id

    redirect_to game_url(@game)

    # redirect_to root_url
    # ?status=DONATION_COMPLETE
    # &amount=6
    # &donation_token=STRING
  end
end
