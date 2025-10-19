const output = document.getElementById('output');
const input = document.getElementById('command-input');

function print(text) {
output.innerHTML += text + '\n';
}

function processCommand(command) {
switch (command.toLowerCase()) {
case 'help':
print("Available commands:\n- about\n- contact\n- profession\n- clear");
break;
case 'about':
print("Hi, I'm Prachi! A software developer and tech enthusiast.");
break;
case 'contact':
print("You can reach me at: prachi@example.com");
break;
case 'profession':
print("Currently working as a Java Developer specializing in Spring Boot.");
break;
case 'clear':
output.innerHTML = '';
break;
default:
print(`Unknown command: ${command}`);
}
}

input.addEventListener('keydown', function (e) {
if (e.key === 'Enter') {
const command = input.value.trim();
print(`> ${command}`);
processCommand(command);
input.value = '';
}
});

print("Hi, I'm Prachi! Type 'help' to see available commands.");

