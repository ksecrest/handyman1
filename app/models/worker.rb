class Worker < ApplicationRecord
    has_many :services, dependent: :destroy
    validates :fullname, :email, :phone, :location, :experience, presence: true
end
