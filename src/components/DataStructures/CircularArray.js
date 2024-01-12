// CircularArray.js

class CircularArray {
  constructor(capacity) {
    this.capacity = capacity;
    this.array = new Array(capacity);
    this.size = 0;
    this.front = 0;
  }

  enqueue(item) {
    if (this.size === this.capacity) {
      console.log("Circular array is full. Cannot enqueue.");
      return;
    }

    const rear = (this.front + this.size) % this.capacity;
    this.array[rear] = item;
    this.size++;
  }

  dequeue() {
    if (this.size === 0) {
      console.log("Circular array is empty. Cannot dequeue.");
      return;
    }

    const frontItem = this.array[this.front];
    this.array[this.front] = undefined;
    this.front = (this.front + 1) % this.capacity;
    this.size--;

    return frontItem;
  }

  peek() {
    if (this.size === 0) {
      console.log("Circular array is empty. Cannot peek.");
      return;
    }

    const frontElement = this.array[this.front];

    // Dequeue the front element
    this.dequeue();

    // Enqueue the front element at the end
    this.enqueue(frontElement);

    return frontElement;
  }

  top(){
    if(this.size===0)
    {
      return;
    }

    return this.array[this.front];
  }

  print() {
    let result = [];
    for (let i = 0; i < this.size; i++) {
      const index = (this.front + i) % this.capacity;
      result.push(this.array[index]);
    }
    console.log(result.join(" -> "));
  }
}

export default CircularArray;
