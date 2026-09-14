require "csv"

class Admin::LeadsController < Admin::BaseController
  before_action :load_lead, only: %i[show update destroy]

  def index
    @status = params[:status].to_s
    @leads = Lead.by_status(@status).recent
    @leads = @leads.where(source: params[:source]) if Lead::SOURCES.include?(params[:source].to_s)
    @counts = {
      all: Lead.count,
      new: Lead.where(status: "new").count,
      contacted: Lead.where(status: "contacted").count,
      closed: Lead.where(status: "closed").count
    }
  end

  def show; end

  def update
    if @lead.update(lead_params)
      back_or admin_leads_path
    else
      render :show, status: :unprocessable_entity
    end
  end

  def destroy
    @lead.destroy!
    redirect_to admin_leads_path, notice: "تم حذف الطلب."
  end

  # The sales team works the pipeline in a spreadsheet; a table they cannot take
  # with them is a table they will not use.
  def export
    leads = Lead.by_status(params[:status].to_s).recent
    csv = CSV.generate(write_headers: true, headers: Lead.csv_headers) do |out|
      leads.each { |l| out << l.to_csv_row }
    end
    send_data "﻿#{csv}", # BOM so Excel opens the Arabic columns correctly
              filename: "beauty-roots-leads-#{Date.current}.csv",
              type: "text/csv; charset=utf-8"
  end

  private

  def load_lead = (@lead = Lead.find(params[:id]))

  def lead_params = params.require(:lead).permit(:status, :admin_notes)
end
