require 'rails_helper'

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
      <mark>Marked Text</mark>
    HTML

    cooked = PrettyText.cook markdown.strip
    expect(cooked).to eq(html.strip)
  end

  it "supports highlighting text" do
    markdown = <<~MD
      ==Marked Text==
    MD

    html = <<~HTML
      <mark>Marked Text</mark>
    HTML

    cooked = PrettyText.cook markdown.strip
    expect(cooked).to eq(html.strip)
  end

end
