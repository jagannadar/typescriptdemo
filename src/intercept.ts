type draggable={
    drag:()=> void
}

type Resizable={
    resize:()=> void
}

type WI= draggable & Resizable; // using intersection type to combine

let textBox: WI = {
    drag() {
        
    },
    resize() {
        
    },
}