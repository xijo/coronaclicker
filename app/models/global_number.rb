class GlobalNumber < ApplicationRecord
  def infected
    confirmed - deaths - recovered
  end

  def received
    (received_cents / 100).floor
  end

  def decrementer
    case received
    when 0..99 then 0
    when 100..199 then 1
    when 200..499 then 2
    when 500..999 then 3
    when 1000..1999 then 4
    when 2000..4999 then 5
    else 5
    end
  end
end
