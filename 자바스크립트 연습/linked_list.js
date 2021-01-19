function Node(data) {
  this.data = data;
  this.ref = null;
  this.next = () => {
    return this.ref;
  };
}

function linkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;

  this.empty = () => {
    return !this.length ? true : false;
  };

  this.add = (data) => {
    var newNode = new Node(data);

    if (this.empty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.ref = newNode;
      this.tail = newNode;
    }
    this.length++;
  };

  this.findData = (pos) => {
    var curNode = this.head;

    if (pos > this.length - 1) {
      return false;
    }

    for (let i = 1; i < pos; i++) {
      curNode = curNode.next();
    }

    return curNode.data;
  };

  const del = () => {};
}

var LL = new linkedList();

LL.add(3);
LL.add(6);
LL.add(1);
LL.add(5);
LL.add(8);
LL.add(13);
LL.add(32);
LL.add(23);
LL.add(63);

var pos = LL.findData(3);
console.log(LL.length);
console.log(pos);
