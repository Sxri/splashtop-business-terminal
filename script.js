document.addEventListener('DOMContentLoaded', function() {
  const output = document.getElementById('output');
  const input = document.getElementById('input');

  input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      processCommand(input.value);
      input.value = '';
    }
  });

  function processCommand(command) {
    output.innerHTML += `> ${command}\n`;

    switch (command.toLowerCase()) {
      case 'help':
        output.innerHTML += 'help_commands: calculator; snake; proxy; youtube\n';
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
        output.innerHTML += 'Invalid command. Type "help" to see available commands.\n';
        break;
    }

    output.scrollTop = output.scrollHeight;
  }

  input.focus();
});
