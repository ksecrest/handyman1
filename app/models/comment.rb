class Comment < ApplicationRecord
  belongs_to :service
  validates :body, presence: true
end
