class Game < ApplicationRecord
  serialize :donations, JSON

  def high_decrementer
    donation_amounts.select { |v| v >= 5 }.inject(1) do |d, value|
      d * (value < 10 ? 2 : 5)
    end
  end

  def low_decrementer
    donation_amounts.select { |v| v < 5 }.inject(0) do |d, value|
      d + (value < 2 ? 1 : 5)
    end
  end

  def donation_amounts
    (donations || {}).values.map(&:to_i)
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
