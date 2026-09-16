class Faq < ApplicationRecord
  belongs_to :post, optional: true

  validates :question_ar, :question_en, :answer_ar, :answer_en, presence: true

  scope :ordered, -> { order(:position, :id) }
  scope :live, -> { where(published: true) }
  scope :general, -> { where(post_id: nil) }

  def question_for(locale) = locale.to_s == "en" ? question_en : question_ar
  def answer_for(locale)   = locale.to_s == "en" ? answer_en : answer_ar
end
