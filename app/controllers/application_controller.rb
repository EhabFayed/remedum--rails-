class ApplicationController < ActionController::Base
  # CSRF protection for the HTML frontend. API controllers (when added)
  # should inherit from ActionController::API instead.
  protect_from_forgery with: :exception
end
