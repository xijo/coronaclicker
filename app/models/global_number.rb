class GlobalNumber < ApplicationRecord
  def infected
    confirmed - deaths - recovered
  end

  def received
    (received_cents / 100).floor
  end

  # TODO Johannes: Else muss x2 sein und nicht +20
  def decrementer
    case received
    when 0..149 then 0
    when 150..299 then 1
    when 300..499 then 1
    when 500..749 then 2
    when 750..999 then 2
    when 1000..1399 then 3
    when 1400..1899 then 3
    when 1900..2499 then 4
    when 2500..2999 then 4
    when 3000..3999 then 5
    when 4000..7499 then 8
    when 7500..9999 then 10
    else 20
    end
  end
end
