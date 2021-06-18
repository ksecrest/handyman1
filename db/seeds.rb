# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
availabilities= ['no wait', 'a couple of weeks', 'booked out for months']
bodies = [ "best handyman of all time", "couldn't get her to call me back", "the crown molding job was super", "don't expect this work to be cheap", "he stole all my tools", "this guy brought me lunch and fixed my oven", "She swept up and planted my garden too", "too rude to deal with"]
5.times do 
    worker = Worker.create(
        name: Faker::Name.name,
        email: Faker::Internet.email,
        phone: Faker::PhoneNumber.phone_number,
        location: Faker::Address.city,
        experience: Faker::Number.within(range: 1..40))  
    
            3.times do
                service = Service.create(
                description: Faker::Construction.subcontract_category,
                cost: Faker::Commerce.price(range: 10..200, as_string: true),
                availability: availabilities.sample,
                worker_id: worker.id
                )

           

                2.times do
                Comment.create(
                    date: Faker::Date.between(from: '2018-09-23', to: '2021-06-18'),
                    title: Faker::Book.title,
                    body: bodies.sample,
                    service_id: service.id
                    )
                end
            end
    end




puts 'data seeded'