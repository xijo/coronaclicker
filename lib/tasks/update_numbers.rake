require 'open-uri'

namespace :update_numbers do
  desc ''
  task :refresh => [:environment] do
    data = JSON.parse open('https://pomber.github.io/covid19/timeseries.json').read
    confirmed = data.values.map { |v| v.last['confirmed'].to_i }.sum
    recovered = data.values.map { |v| v.last['recovered'].to_i }.sum
    deaths = data.values.map { |v| v.last['deaths'].to_i }.sum

    global_number = GlobalNumber.last || GlobalNumber.create
    global_number.update(confirmed: confirmed, recovered: recovered, deaths: deaths)

    data = JSON.parse open('https://api.betterplace.org/de/api_v4/clients/coronaclicker/project_statistics.json').read
    global_number.update received_cents: data['client_donated_amount_in_cents']
  end
end
