document.addEventListener('DOMContentLoaded', function() {
  const output = document.getElementById('output');
  const input = document.getElementById('input');

  output.innerHTML += "Welcome to the Splashtop Business Terminal. A terminal where you can find functional resources and utilities.\nThis website is intended specifically for the Splashtop Business app on ChromeOS, say `help` for a list of commands. \n\n";
  
  input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      processCommand(input.value);
      input.value = '';
    }
  });

  function processCommand(command) {
    output.innerHTML += `<span class="prompt">&gt; </span>${command}\n\n`;

    switch (command.toLowerCase()) {
      case 'help':
        output.innerHTML += 'help_commands: calculator; snake; proxy; youtube\n\n';
        break;
      case 'calculator':
        // Your calculator logic here
        break;
      case 'snake':
        // Your snake game logic here
        break;
      case 'proxy':
        // Your proxy logic here
        break;
      case 'youtube':
        // Your YouTube logic here
        break;
      default:
        output.innerHTML += 'Invalid command. Type "help" to see available commands.\n\n';
        break;
    }

    output.scrollTop = output.scrollHeight;
  }

  input.focus();
});
