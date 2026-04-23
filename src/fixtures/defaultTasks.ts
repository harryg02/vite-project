export interface TodoTask {
    task: string;
    created: number;
    date: string;
    time: string;
}

export const defaultTasks: TodoTask[] = [
    {
        task: "Complete SI 579 assignment",
        created: 1745444400000,
        date: "2026-04-25",
        time: "23:59",
    },
    {
        task: "Review lecture notes",
        created: 1745440800000,
        date: "2026-04-24",
        time: "18:00",
    },
    {
        task: "Study for midterm",
        created: 1745437200000,
        date: "2026-04-28",
        time: "09:00",
    },
];
