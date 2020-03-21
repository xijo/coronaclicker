class GlobalNumber < ApplicationRecord
  def infected
    confirmed - deaths - recovered
  end
end
