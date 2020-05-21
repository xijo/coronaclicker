# Corona Clicker

## Development

Initially `bundle exec rails update_numbers:refresh`

Or start forego server with `forego start -f Procfile.dev`

Start application with `bundle exec rails s`

## Prepare local instance

Install all brew packages: `ruby, postgresql, forego, node`

Install all gems: `bundle install`

Install all npm packages: `yarn`

Create and migrate DB: `bundle exec rails db:create db:migrate`

## Use Heroku CLI for deploying to Heroku Server