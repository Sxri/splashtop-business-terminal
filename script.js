document.addEventListener('DOMContentLoaded', function() {
  const output = document.getElementById('output');
  const input = document.getElementById('input');

  output.innerHTML += "Welcome to the Splashtop Business Terminal. A terminal where you can find functional resources and utilities.\nThis website is intended specifically for the Splashtop Business app on ChromeOS, say `help` for a list of commands. \n\n";
  output.innerHTML += '<span style="font-weight: bold; color: red;">[COMMANDS ARE IN TESTING STAGE. BUGS WILL OCCUR]</span>\n\n';
  
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
        output.innerHTML += 'help_commands[DEV_NOTE: Some commands are in testing, bugs may occur.]: \ncalculator;\nsnake;\nproxy;\nyoutube\ninfo;\nsetup;\n\n';
        break;
      case 'calculator':
        output.innerHTML += 'We are redirecting you to the calculator app, please wait.\n\n';
        break;
      case 'snake':
        output.innerHTML += 'We are redirecting you to the snake_game app, please wait.\n\n';
        break;
      case 'proxy':
        output.innerHTML += 'We are attempting to redirect you to a proxy_app, please wait.\n[DEV_NOTE: Websites accessed via proxy may not function as intended, relocate back to the terminal using the back button at the top of the page.]\n\n';
        break;
      case 'youtube':
        output.innerHTML += "Attempting to redirect you to YOUTUBE. \n[DEV_NOTE: YouTube is a WORK IN PROGRESS, as videos are very buggy on Splashtops Server. (They don't load properly)]\n\n";
        break;
      default:
        output.innerHTML += '<span style="font-weight: bold; color: red;">Invalid command. Type "help" to see available commands.</span>\n\n';
        break;
    }

    output.scrollTop = output.scrollHeight;
  }

  input.focus();
});
