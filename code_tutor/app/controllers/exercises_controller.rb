class ExercisesController < ApplicationController
  before_action :set_exercise, only: [:show, :update, :destroy]

  # GET /exercises
  def index
    if params[:lesson_id]
      @exercise = Exercise.where(lesson_id: params[:lesson_id])
      render json: @exercise
    else
    @exercises = Exercise.all

    render json: @exercises
  end
end

  # GET /exercises/1
  def show
    render json: @exercise
  end

  # POST /exercises
  def create
    @lesson = Lesson.find(params[:lesson_id])
    @exercise = Exercise.new(exercise_params)
    if @lesson.exercises << @exercise
      render json: @exercise, status: :created, location: @exercise
    else
      render json: @exercise.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /exercises/1
  def update
    @lesson = Lesson.find(params[:lesson_id])
    if @exercise.update(exercise_params)
      render json: @exercise
    else
      render json: @exercise.errors, status: :unprocessable_entity
    end
  end

  # DELETE /exercises/1
  def destroy
    @exercise.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_exercise
      @exercise = Exercise.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def exercise_params
      params.require(:exercise).permit(:title, :snippet, :lesson_id)
    end
  end
  
