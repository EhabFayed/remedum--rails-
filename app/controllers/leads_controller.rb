# The public end of the quote and contact forms. Deliberately not under
# Admin::BaseController — no session, no dashboard chrome.
class LeadsController < ApplicationController
  skip_forgery_protection if Rails.env.test?

  rate_limit to: 8, within: 10.minutes, only: :create,
             with: -> { render json: { ok: false, message: "طلبات كثيرة. حاول بعد قليل." }, status: :too_many_requests }

  def create
    # Bots fill every field they find; a human never sees this one.
    return render_ok if params[:company_website].present?

    lead = Lead.new(lead_params)
    lead.locale = params[:locale].to_s == "en" ? "en" : "ar"
    lead.source_path = params[:source_path].to_s.first(255)

    if lead.save
      LeadMailer.notify(lead).deliver_later if Setting["leads_notify_email"].present?
      render_ok
    else
      render json: { ok: false, errors: lead.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def render_ok
    render json: { ok: true }
  end

  def lead_params
    params.require(:lead).permit(:name, :facility, :facility_type, :city, :phone, :email,
                                 :volume, :existing_client, :visit_requested, :eligibility_ack,
                                 :message, :source, products: [])
  end
end
