/**
 * CircularArray - A circular queue implementation
 * Useful for managing carousel data and cyclic collections
 */
class CircularArray {
  constructor(capacity) {
    if (capacity <= 0) {
      throw new Error("Capacity must be greater than 0");
    }

    this.capacity = capacity;
    this.array = new Array(capacity);
    this.size = 0;
    this.front = 0;
  }

  /**
   * Add an item to the rear of the circular array
   * @param {*} item - The item to add
   * @returns {boolean} - Success status
   */
  enqueue(item) {
    if (this.isFull()) {
      if (process.env.NODE_ENV === "development") {
        console.warn("Circular array is full. Cannot enqueue.");
      }
      return false;
    }

    const rear = (this.front + this.size) % this.capacity;
    this.array[rear] = item;
    this.size++;
    return true;
  }

  /**
   * Remove and return the front item from the circular array
   * @returns {*} - The dequeued item or null if empty
   */
  dequeue() {
    if (this.isEmpty()) {
      if (process.env.NODE_ENV === "development") {
        console.warn("Circular array is empty. Cannot dequeue.");
      }
      return null;
    }

    const frontItem = this.array[this.front];
    this.array[this.front] = undefined;
    this.front = (this.front + 1) % this.capacity;
    this.size--;

    return frontItem;
  }

  /**
   * Rotate the array to show the next item (moves front item to rear)
   * @returns {*} - The new front item or null if empty
   */
  peek() {
    if (this.isEmpty()) {
      if (process.env.NODE_ENV === "development") {
        console.warn("Circular array is empty. Cannot peek.");
      }
      return null;
    }

    const frontElement = this.array[this.front];
    this.dequeue();
    this.enqueue(frontElement);

    return frontElement;
  }

  /**
   * Get the front item without removing it
   * @returns {*} - The front item or null if empty
   */
  top() {
    if (this.isEmpty()) {
      return null;
    }
    return this.array[this.front];
  }

  /**
   * Get all items in order from front to rear
   * @returns {Array} - Array of items in order
   */
  toArray() {
    const result = [];
    for (let i = 0; i < this.size; i++) {
      const index = (this.front + i) % this.capacity;
      result.push(this.array[index]);
    }
    return result;
  }

  /**
   * Print the circular array contents (development helper)
   */
  print() {
    const result = this.toArray();
    console.log(result.join(" -> "));
  }

  /**
   * Check if the circular array is empty
   * @returns {boolean}
   */
  isEmpty() {
    return this.size === 0;
  }

  /**
   * Check if the circular array is full
   * @returns {boolean}
   */
  isFull() {
    return this.size === this.capacity;
  }

  /**
   * Get current size
   * @returns {number}
   */
  getSize() {
    return this.size;
  }

  /**
   * Get capacity
   * @returns {number}
   */
  getCapacity() {
    return this.capacity;
  }
}

export default CircularArray;
