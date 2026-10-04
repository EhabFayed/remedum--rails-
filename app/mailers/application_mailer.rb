class ApplicationMailer < ActionMailer::Base
  default from: ENV.fetch("MAIL_FROM", "Beauty Roots <no-reply@beautyrooots.com>")
  layout "mailer"
end
