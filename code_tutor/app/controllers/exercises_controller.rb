# frozen_string_literal: true

class ExercisesController < ApplicationController
  before_action :set_exercise, only: %i[show update destroy]

  # GET /user/exercises
  def index
    @exercises = Exercise.all

    render json: @exercises
  end

  # GET /lesson/lesson_id/exercises/exercise_id
  def show
    @lesson = Lesson.find(params(:id))
    @exercise = Exercise.find(params(:id))
    render json: @exercise
  end

  # POST /lesson/lesson_id/exercises
  def new
    @lesson = Lesson.find(params[:lesson_id])
    @exercise = Exercise.new
  end

  def create
    @lesson = Lesson.find(params(:id))
    @exercise = Exercise.new(exercise_params)

    if @exercise.save
      render json: @exercise, status: :created, location: @exercise
    else
      render json: @exercise.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /exercises/1
  def edit
    @lesson = Lesson.find(params[:lesson_id])
    @exercise = Exercise.find(params[:exercise_id])
  end

  def update
    @lesson = Lesson.find(params(:id))
    @exercise = Exercise.new(exercise_params)
    if @exercise.update(exercise_params)
      render json: @exercise
    else
      render json: @exercise.errors, status: :unprocessable_entity
    end
  end

  # DELETE /exercises/1
  def destroy
    @lesson = Lesson.find(params[:lesson_id])
    @exercise = Exercise.find(params[:exercise_id])
    @exercise.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_exercise
    @exercise = Exercise.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def exercise_params
    params.fetch(:exercise).permit(:title, :exercise_id)
  end
end
