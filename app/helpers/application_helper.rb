module ApplicationHelper
  def header_button_tag(text)
    html = '<button class="btn btn-info btn-lg"'
    html += 'id="sign_up_button">'
    html += "#{h(text)}</button>"
    html.html_safe
  end
end