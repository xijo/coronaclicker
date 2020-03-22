class GlobalNumber < ApplicationRecord
  def infected
    confirmed - deaths - recovered
  end

  def received
    (received_cents / 100).floor
  end

  def decrementer
    received / 1000
  end
end
