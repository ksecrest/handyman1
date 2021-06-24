class Api::WorkersController < ApplicationController
    
    before_action :set_worker, only: [:show, :update, :destroy]
    
    def index
        render json: Worker.all
    end

    def show
        render json: @worker
    end

    def create
        @worker = Worker.new(worker_params)
        if @worker.save
            render json: @worker
        else
            render json: { errors: @worker.errors }, status: :unprocessable_entity
        end
    end

    def update
        if @worker.update(worker_params)
          render json: @worker
        else
          render json: { errors: @worker.errors }, status: :unprocessable_entity
        end
    end

    def destroy
        @worker.destroy
        render json: { message: 'worker deleted' }
    end

    private
    def set_worker
        @worker = Worker.find(params[:id])
    end

    def worker_params
        params.require(:worker).permit(:fullname, :email, :phone, :location, :experience)
    end
end

# fullname"
#     t.string "email"
#     t.string "phone"
#     t.string "location"
#     t.integer "experience"