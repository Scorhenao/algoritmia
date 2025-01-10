class superMarker {
  constructor(name, clients = []) {
    this.name = name;
    this.clients = clients;
  }

  addClient(client) {
    this.clients.push(client);
  }
  kickClient(client) {
    this.clients.splice(this.clients.indexOf(client), 1);
  }

  isEmpty() {
    return this.clients.length === 0;
  }
}

const superMarker1 = new superMarker("superMarker1");
superMarker1.addClient("client1");
superMarker1.addClient("client2");
superMarker1.kickClient("client1");

console.log(superMarker1.isEmpty()); // false
console.log(superMarker1.clients); // ["client1", "client2"]