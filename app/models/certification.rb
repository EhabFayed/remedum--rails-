class Certification < ApplicationRecord
  before_validation { self.code = code.to_s.strip.upcase }

  validates :code, :name_ar, :name_en, presence: true
  validates :code, uniqueness: true

  scope :ordered, -> { order(:position, :id) }
  scope :live, -> { where(published: true) }

  def name_for(locale) = locale.to_s == "en" ? name_en : name_ar
  def meaning_for(locale) = locale.to_s == "en" ? meaning_en.presence || meaning_ar : meaning_ar
  def detailed? = meaning_ar.present? || meaning_en.present?
end
