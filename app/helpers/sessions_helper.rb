module SessionsHelper
  def input_for(username)
    html = '<input type="text"'
    html += 'placeholder="Username"'
    html += 'name="user[username]"'
    html += "value=\"#{h(username)}\">"

    html.html_safe
  end
end