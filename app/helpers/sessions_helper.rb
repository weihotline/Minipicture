module SessionsHelper
  def input_for(email)
    html = '<input type="text"'
    html += 'class="form-control"'
    html += 'placeholder="Email"'
    html += 'name="user[email]"'
    html += 'id="user_email"'
    html += "value=\"#{h(email)}\">"

    html.html_safe
  end
end