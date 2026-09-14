class ApplicationRecord < ActiveRecord::Base
  primary_abstract_class

  # Lets a form send an ordered list of nested rows and have them saved in the
  # order they arrived, which is how every sortable list in the dashboard works.
  def self.reposition!(ids)
    ids.each_with_index { |id, i| where(id: id).update_all(position: i) }
  end
end
