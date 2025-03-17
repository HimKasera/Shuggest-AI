import { pgTable, serial, text, varchar, timestamp } from "drizzle-orm/pg-core";

export const MockInterview = pgTable("mockinterview", {
    id: serial("id").primaryKey(),
    jsonMockResp: text("jsonMockResp").notNull(),
    jobPosition: varchar("jobPosition", { length: 255 }).notNull(),
    jobDesc: varchar("jobDesc", { length: 500 }).notNull(),
    jobExperience: varchar("jobExperience", { length: 100 }).notNull(),
    createdBy: varchar("createdBy", { length: 255 }).notNull(),
    createdAt: timestamp("createdAt", { mode: "date" }).defaultNow(),
    mockId: varchar("mockId", { length: 255 }).notNull()
});

export const UserAnswer = pgTable("userAnswer", {
    id: serial("id").primaryKey(),
    mockIdRef: varchar("mockId", { length: 255 }).notNull(),
    question: varchar("question", { length: 500 }).notNull(),
    correctAns: text("correctAns"),
    userAns: text("userAns"),
    feedback: text("feedback"),
    rating: varchar("rating", { length: 10 }),
    userEmail: varchar("userEmail", { length: 255 }),
    createdAt: timestamp("createdAt", { mode: "date" }).defaultNow()
});
