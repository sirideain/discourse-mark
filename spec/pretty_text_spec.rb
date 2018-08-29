require 'rails_helper'
require 'pretty_text'

describe PrettyText do
  before do
    SiteSetting.queue_jobs = false
  end

  it "can be disabled" do
    SiteSetting.mark_enabled = false

    markdown = <<~MD
      ==Marked Text==
    MD

    html = <<~HTML
      <p>==Marked Text==</p>
    HTML

    cooked = PrettyText.cook markdown.strip
    expect(cooked).to eq(html.strip)
  end

  it "supports highlighting text" do
    markdown = <<~MD
      ==Marked Text==
    MD

    html = <<~HTML
      <p><mark>Marked Text</mark></p>
    HTML

    cooked = PrettyText.cook markdown.strip
    expect(cooked).to eq(html.strip)
  end

end
