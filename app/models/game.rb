class Game < ApplicationRecord
  serialize :donations, JSON

  # def decrementer
  #   -    (donations || {}).inject(1) do |d, (_, value)|
  #   -      amount = value.to_i
  #   -      if (amount < 2)
  #   -        d + 1
  #   -      elsif (amount < 5)
  #   -        d * 2
  #   -      elsif (amount < 10)
  #   -        d * 5
  #   -      else
  #   -        d * 10
  #   -      end

  def high_decrementer
    donation_amounts.select { |v| v >= 5 }.inject(1) do |d, value|
      if (value >= 5 && value < 10)
        d * 2
      elsif (value >= 10 && value < 25)
        d * 5
      end
    end
  end

  def low_decrementer
    donation_amounts.select { |v| v < 5 }.inject(0) do |d, value|
      if (value >= 1 && value < 2)
        d + 1
      elsif (value >= 2 && value < 5)
        d + 5
      elsif (value >= 25)
        d + 100
      end
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
