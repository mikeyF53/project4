class LessonsController < ApplicationController
  before_action :set_lesson, only: [:show, :update, :destroy]

  # GET /lessons
  def index
    @lessons = Lesson.all
    render json: @lessons
  end

  # GET /user/user_id/lessons/lesson_id
  def show
    @user = User.find(params[:user_id])
    @lesson = Lesson.find(params[:lesson_id])
    render json: @lesson
  end

  # POST /user/user_id/lessons
  def new
    @user = User.find(params[:user_id])
    @lesson = Lesson.new
  end

  def create
    @user = User.find(params[:user_id])
    @lesson = Lesson.new(lesson_params)

    if @lesson.save
      render json: @lesson, status: :created, location: @lesson
    else
      render json: @lesson.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /user/user_id/lessons/lesson_id
  def edit
    @user = User.find(params[:user_id])
    @lesson = Lesson.find(params[:lesson_id])
  end

  def update
    @user = User.find(params[:user_id])
    @lesson = Lesson.find(lesson_params)
    if @lesson.update_attributes(lesson_params)
      render json: @lesson
    else
      render json: @lesson.errors, status: :unprocessable_entity
    end
  end

  # DELETE /user/user_id/lessons/lesson_id
  def destroy
    @user = User.find(params[:user_id])
    @lesson = Lesson.find(params[:lesson_id])
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
