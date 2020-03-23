class GlobalNumber < ApplicationRecord
  def infected
    confirmed - deaths - recovered
  end

  def received
    (received_cents / 100).floor
  end

  def decrementer
    case received
    when 0..199 then 0
    when 200..349 then 1
    when 350..499 then 2
    when 500..749 then 3
    when 750..999 then 4
    when 1000..1399 then 5
    when 1400..1899 then 6
    when 1900..2499 then 7
    when 2500..2999 then 8
    when 3000..3999 then 9
    when 4000..4999 then 10
    else 11
    end
  end
end
