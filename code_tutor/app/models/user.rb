class User < ApplicationRecord
  has_many :lessons
  has_secure_password
end
