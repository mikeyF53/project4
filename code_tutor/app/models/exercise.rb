class Exercise < ApplicationRecord
  belongs_to :lessons
  has_many :progress
end
