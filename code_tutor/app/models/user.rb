class User < ApplicationRecord
  has_many :lessons
  has_many :progress
  has_secure_password
end
