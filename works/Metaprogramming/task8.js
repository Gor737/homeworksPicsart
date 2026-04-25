class DatabaseConnection {
  constructor() {
    this.id = Math.random();
  }
}

// TODO: Create SingletonDB Proxy
const SingletonDB = new Proxy(DatabaseConnection, {
  _instance: null,
  construct(target, args, newTarget) {

    if (!this._instance) {
      this._instance = Reflect.construct(target, args, newTarget);
      return this._instance;
    } else {
      return this._instance;
    }
  },
});

const db1 = new SingletonDB();
const db2 = new SingletonDB();

console.log(db1.id === db2.id);

// Expected output:
// true
