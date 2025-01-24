class Task < ApplicationRecord
  validates :description, presence: true, length: { maximum: 50 }
  validates :status, presence: false
end
