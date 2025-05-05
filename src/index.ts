function getGreetingPhrase(name: string) {
  return `Hello, ${name.toUpperCase()}!`;
}

const greeting = getGreetingPhrase("Alex");

console.log(greeting);
