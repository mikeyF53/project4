# frozen_string_literal: true

class User < ApplicationRecord
  has_many :lessons
  has_secure_password
  validates :email, presence: true
  validates_uniqueness_of :email

  def to_token_payload
    {
      id: id,
      name: name,
      email: email
    }
  end
end
