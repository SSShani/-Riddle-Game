// The Player class. Export it as the default export.
//
// Properties:
// - name
// - times (an array that holds the time it took to solve each riddle)
//
// Methods:
// - recordTime(start, end)
//   - calculate the duration (end - start) and add it to the times array
// - showStats()
//   - show the total time and the average time per riddle
export default class Player {
  constructor(name) {
    this.name = name;
    this.times = [];
  }

  recordTime(start, end) {
    this.times.push(end - start);
  }

  showStats() {
    const total = this.times.reduce((sum, t) => sum + t, 0);
    const average = total / this.times.length;
    console.log(`\n${this.name}, total time: ${(total / 1000).toFixed(1)}s`);
    console.log(`Average per riddle: ${(average / 1000).toFixed(1)}s`);
  }
}