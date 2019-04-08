require 'test_helper'

class ProgressesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @progress = progresses(:one)
  end

  test "should get index" do
    get progresses_url, as: :json
    assert_response :success
  end

  test "should create progress" do
    assert_difference('Progress.count') do
      post progresses_url, params: { progress: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show progress" do
    get progress_url(@progress), as: :json
    assert_response :success
  end

  test "should update progress" do
    patch progress_url(@progress), params: { progress: {  } }, as: :json
    assert_response 200
  end

  test "should destroy progress" do
    assert_difference('Progress.count', -1) do
      delete progress_url(@progress), as: :json
    end

    assert_response 204
  end
end
