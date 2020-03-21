class Game < ApplicationRecord
  serialize :donations, JSON
end
