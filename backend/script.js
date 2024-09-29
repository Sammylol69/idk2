document.getElementById('discord').addEventListener('click', function() {
    window.open('https://discord.gg/SAjuSzSdGF', '_blank');
});

document.getElementById('download').addEventListener('click', function() {
    // Create a temporary link element for downloading the file
    var link = document.createElement('a');
    link.href = '/backend/trake.exe'; // URL to the file you want to download
    link.download = 'Trake-V1.0.0-Beta.exe'; // Optional: the default name for the downloaded file
    document.body.appendChild(link); // Append the link to the body
    link.click(); // Programmatically click the link to trigger the download
    document.body.removeChild(link); // Remove the link from the document
});