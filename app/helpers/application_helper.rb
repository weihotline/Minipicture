module ApplicationHelper
  def set_action(url)
    html = "action=\"#{h(url)}\""
    html.html_safe
  end

  def set_value(text)
    html = "value=\"#{h(text)}\""
    html.html_safe
  end

  def header_button_tag(text)
    html = '<button class="btn btn-info btn-lg"'
    html += 'id="sign_up_button">'
    html += "#{h(text)}</button>"
    html.html_safe
  end
end