class Comment < ApplicationRecord
  belongs_to :service
  validates :date, :body, presence: true
end
