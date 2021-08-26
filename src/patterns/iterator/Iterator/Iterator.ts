
export interface Iterator<T> {
    // Return the current element.
    current(): T;

    // Return the current element and move forward to next element.
    advance(): void;

    hasNext():boolean;

}
