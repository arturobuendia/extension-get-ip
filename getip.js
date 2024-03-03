document.addEventListener("DOMContentLoaded", async function() {
    try {
      const response = await fetch("https://api.ipify.org");
      const data = await response.text();
      document.querySelector("#myip").innerText = data;
      console.log("IP:", data);
    } catch (error) {
      console.error('Error al obtener la dirección IP:', error);
    }

    const copyButton = document.getElementById("copyButton");
    const ipElement = document.getElementById("myip");
    copyButton.addEventListener("click", function() {
        const ipText = ipElement.textContent.trim();
        navigator.clipboard.writeText(ipText)
        .then(() => {
            copyButton.innerText = " ✅";
            setTimeout(() => {
              copyButton.innerText = "📋 Copy";
            }, 2000); // Restablecer el texto después de 2 segundos
          })
      });
  });