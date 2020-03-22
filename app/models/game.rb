class Game < ApplicationRecord
  serialize :donations, JSON

  def decrementer
    (donations || {}).inject(1) do |d, (_, value)|
      amount = value.to_i
      if (amount < 2)
        d + 1
      elsif (amount < 5)
        d * 2
      elsif (amount < 10)
        d * 5
      else
        d * 10
      end
    end
  end

  def donation_sum
    (donations || {}).values.sum
  end

  def powerups
    (donations || {}).map do |key, value|
      { id: Digest::MD5.hexdigest(key), amount: value.to_i }
    end
  end
end
