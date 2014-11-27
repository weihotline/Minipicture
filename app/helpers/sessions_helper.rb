module SessionsHelper
  def input_for(username)
    html = '<input type="text"'
    html += 'class="form-control"'
    html += 'placeholder="Username"'
    html += 'name="user[username]"'
    html += 'id="user_username"'
    html += "value=\"#{h(username)}\">"

    html.html_safe
  end
end