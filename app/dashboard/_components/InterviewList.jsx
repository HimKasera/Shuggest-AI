"use client";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { desc, eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import InterviewItemCard from "./InterviewItemCard";

const InterviewList = () => {
  const { user } = useUser();
  const [interviewList, setInterviewList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user?.primaryEmailAddress?.emailAddress) {
      GetInterviewList();
    }
  }, [user]);

  const GetInterviewList = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch interviews for the current user
      const result = await db
        .select()
        .from(MockInterview)
        .where(eq(MockInterview.createdBy, user?.primaryEmailAddress?.emailAddress))
        .orderBy(desc(MockInterview.id));

      // Update the state with the fetched data
      setInterviewList(result);
    } catch (error) {
      console.error("Error fetching interview list:", error);
      setError("Failed to fetch interview list. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const exampleInterview = {
    id: 0,
    createdBy: user?.primaryEmailAddress?.emailAddress,
    jobRole: "Software Engineer",
    date: new Date().toISOString(),
    status: "Completed",
    feedback: "This is an example interview for a Software Engineer role."
  };

  return (
    <div>
      <h2 className="font-medium text-xl">Previous Mock Interviews</h2>
      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3">
          {interviewList.length > 0 ? (
            interviewList.map((interview, index) => (
              <InterviewItemCard interview={interview} key={index} />
            ))
          ) : (
            <InterviewItemCard interview={exampleInterview} key={0} />
          )}
        </div>
      )}
    </div>
  );
};

export default InterviewList;