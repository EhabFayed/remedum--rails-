class LeadMailer < ApplicationMailer
  def notify(lead)
    @lead = lead
    mail to: Setting["leads_notify_email"],
         subject: "طلب جديد من #{lead.name}#{lead.facility.present? ? " — #{lead.facility}" : ""}"
  end
end
