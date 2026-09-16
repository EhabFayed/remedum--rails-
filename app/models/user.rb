class User < ApplicationRecord
  ROLES = %w[admin editor].freeze

  has_secure_password
  has_many :posts, foreign_key: :author_id, dependent: :nullify, inverse_of: :author
  has_many :media_assets, dependent: :nullify

  before_validation { self.email = email.to_s.downcase.strip }

  validates :name, presence: true, length: { maximum: 120 }
  validates :email, presence: true, uniqueness: { case_sensitive: false },
                    format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :role, inclusion: { in: ROLES }
  validates :password, length: { minimum: 10 }, allow_nil: true

  scope :ordered, -> { order(:name) }

  def admin? = role == "admin"

  def display_role
    admin? ? "مدير" : "محرّر"
  end
end
