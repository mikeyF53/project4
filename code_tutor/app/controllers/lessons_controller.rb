class LessonsController < ApplicationController
  before_action :set_lesson, only: [:show, :update, :destroy]

  # GET /lessons
  def index
    if params[:user_id]
      @lessons = Lesson.where(user_id: params[:user_id])
      render json: @lessons, include: :exercises
    else
    @lessons = Lesson.all

    render json: @lessons, include: :exercises
    end
  end

  # GET /lessons/1
  def show
    render json: @lesson
  end

  # POST /lessons
  def create
    @lesson = Lesson.new(lesson_params)

    if @lesson.save
      render json: @lesson, status: :created, location: @lesson
    else
      render json: @lesson.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /lessons/1
  def update
    if @lesson.update(lesson_params)
      render json: @lesson
    else
      render json: @lesson.errors, status: :unprocessable_entity
    end
  end

  # DELETE /lessons/1
  def destroy
    @lesson.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_lesson
      @lesson = Lesson.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def lesson_params
      params.fetch(:lesson).permit(:title, :description, :user_id)
    end
end

