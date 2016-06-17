/**
 * This class represents a Task
 */
export class Task {
    constructor(public id: int,
        public startTime: Date = null,
        public endTime: Date = null) {
    }

    start(): void {
        if (null != this.startTime) {
            throw new Error('Cannot start a task that already started');
        }
        this.startTime = new Date();
    }

    stop(): void {
        if (null == this.startTime) {
            throw new Error('Cannot stop a task that didn\'t start');
        }
        this.endTime = new Date();
    }
}
