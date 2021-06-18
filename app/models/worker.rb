class Worker < ApplicationRecord
    has_many :services, dependent: :destroy
    validates :name, :email, :phone, :location, :experience, presence: true
end
