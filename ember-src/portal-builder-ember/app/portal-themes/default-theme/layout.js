const layoutConstructor = ({
  header,
  contentForLayout,
  footer
}) => {
  return `
    ${header}
    <div class="page">
      <!-- Search and page links for the page -->
      {% if portal.current_tab and portal.current_tab == "home" %}
        <section class="help-center rounded-6">	
          <div class="hc-search">
            <div class="hc-search-c">
              <h2 class="heading hide-in-mobile">test1</h2>

            </div>
          </div>
          <div class="hc-nav {% if portal.contact_info %} nav-with-contact {% endif %}">				
            {{ portal | helpcenter_navigation }}
          </div>
        </section>
      {% endif %}
    
      <!-- Notification Messages -->
      {{ page_message }}
    
      {% if portal.current_page != "user_signup" and portal.current_page != "submit_ticket" %}
        <div class="c-wrapper">		
          ${contentForLayout}
        </div>
      {% endif %}
    </div>
    ${footer}
  `
}

export default layoutConstructor;

const layoutConstructorOriginal = ({
  header,
  contentForLayout,
  footer
}) => {
  return `
    ${header}
    <div class="page">
      <!-- Search and page links for the page -->
      {% if portal.current_tab and portal.current_tab == "home" %}
        <section class="help-center rounded-6">	
          <div class="hc-search">
            <div class="hc-search-c">
              <h2 class="heading hide-in-mobile">{% translate header.help_center %}</h2>
              {% snippet search_form %}
            </div>
          </div>
          <div class="hc-nav {% if portal.contact_info %} nav-with-contact {% endif %}">				
            {{ portal | helpcenter_navigation }}
          </div>
        </section>
      {% endif %}
    
      <!-- Notification Messages -->
      {{ page_message }}
    
      {% if portal.current_page != "user_signup" and portal.current_page != "submit_ticket" %}
      <div class="c-wrapper">		
        ${contentForLayout}
      </div>
      {% elsif portal.current_page == "submit_ticket" %}
      <div class="c-wrapper">		
        <div class="new_ticket_page">
          ${contentForLayout}
        </div>
      </div>
      {% else %}
      <div class="signup-page">
      <div class="signup-wrapper">
        ${contentForLayout}
      </div>
      </div>
      {% endif %}
    </div>
    ${footer}
  `
}