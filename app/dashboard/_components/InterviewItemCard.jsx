import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { db } from "@/utils/db";
import { eq } from "drizzle-orm";
import { MockInterview } from "@/utils/schema";
import { Trash } from "lucide-react";
import { toast } from "sonner";

const InterviewItemCard = ({ interview }) => {
  const router = useRouter();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const onStart = () => {
    router.push(`/dashboard/interview/${interview?.mockId}`);
  };

  const onFeedbackPress = () => {
    router.push(`/dashboard/interview/${interview?.mockId}/feedback`);
  };

  const onDelete = async () => {
    try {
      await db.delete(MockInterview).where(eq(MockInterview.mockId, interview?.mockId));
      
      // Close dialog and show success toast
      setIsDialogOpen(false);
      toast.success("Interview deleted successfully", {
        style: {
          backgroundColor: "#4a90e2",
          color: "#fff",
        },
      });
      
      // Use router to refresh instead of full page reload
      router.refresh();
    } catch (error) {
      console.error("Error deleting interview:", error);
      toast.error("Failed to delete interview", {
        style: {
          backgroundColor: "#ff4d4d",
          color: "#fff",
        },
      });
    }
  };

  return (
    <div className="relative border shadow-sm rounded-md p-4 bg-gray-50">
      {/* Delete button in the top-right corner */}
      <Button
        size="sm"
        variant="ghost"
        className="absolute top-2 right-2 flex items-center justify-center text-red-500 hover:bg-red-100"
        onClick={() => setIsDialogOpen(true)}
      >
        <Trash size={16} />
      </Button>

      {/* Card Content */}
      <div>
        <h2 className="font-bold text-teal-700">{interview?.jobPosition}</h2>
        <h2 className="text-sm text-gray-600">Experience: {interview?.jobExperience} Year(s)</h2>
        <h2 className="text-sm text-gray-600">Created At: {interview?.createdAt}</h2>
      </div>

      <div className="flex justify-between gap-3 mt-4">
        <Button 
          size="sm" 
          variant="outline" 
          className="w-full text-purple-700 border-purple-700 hover:bg-purple-50"
          onClick={onFeedbackPress}
        >
          Feedback
        </Button>
        <Button 
          className="w-full bg-teal-600 hover:bg-teal-700 text-white" 
          size="sm" 
          onClick={onStart}
        >
          Start
        </Button>
      </div>

      {/* Confirmation Dialog */}
      {isDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4">
            <h3 className="text-lg font-bold mb-4 text-teal-700">Confirm Deletion</h3>
            <p className="mb-4 text-gray-700">Are you sure you want to delete this interview?</p>
            <div className="flex justify-end gap-3">
              <Button 
                variant="outline" 
                className="text-teal-700 hover:bg-teal-50"
                onClick={() => setIsDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button 
                variant="destructive" 
                className="bg-red-600 hover:bg-red-700"
                onClick={onDelete}
              >
                Confirm Delete
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InterviewItemCard;