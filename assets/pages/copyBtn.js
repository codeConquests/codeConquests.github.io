// copy serverinfo code 
new ClipboardJS("#copyServerinfoCodeBtn").on("success", function(e) {
  e.clearSelection();
  alert("Copied to clipboard!");
});

let serverinfoCode = document.getElementById("serverinfoCode");
serverinfoCode.setAttribute("data-clipboard-text", serverinfoCode.textContent.trim());

// copy userinfo code
new ClipboardJS("#copyUserinfoCodeBtn").on("success", function(e) {
  e.clearSelection();
  alert("Copied to clipboard!");
});

let userinfoCode = document.getElementById("userinfoCode");
userinfoCode.setAttribute("data-clipboard-text", userinfoCode.textContent.trim());
