// app/api/vapi/generate/route.ts

import { generateText } from "ai";
import { google } from "@ai-sdk/google";

import { db } from "@/firebase/admin";
import { getRandomInterviewCover } from "@/lib/utils";

// Main function that both GET and POST will use
async function runInterviewGeneration({
  type,
  role,
  level,
  techstack,
  amount,
  userid,
}: {
  type: string;
  role: string;
  level: string;
  techstack: string;
  amount: number;
  userid: string;
}) {
  // console.log("GOOGLE_API_KEY is loaded?", !!process.env.GOOGLE_API_KEY);
  if (!process.env.GOOGLE_API_KEY) {
    throw new Error("Missing GOOGLE_API_KEY in environment");
  }

  const { text: questions } = await generateText({
    model: google("gemini-2.0-flash-001"),
    prompt: `Prepare questions for a job interview.
      The job role is ${role}.
      The job experience level is ${level}.
      The tech stack used in the job is: ${techstack}.
      The focus between behavioural and technical questions should lean towards: ${type}.
      The amount of questions required is: ${amount}.
      Please return only the questions, without any additional text.
      The questions are going to be read by a voice assistant so do not use "/" or "*" or any other special characters which might break the voice assistant.
      Return the questions formatted like this:
      ["Question 1", "Question 2", "Question 3"]

      Thank you! <3
    `,
  });

  const interview = {
    role,
    type,
    level,
    techstack: techstack.split(","),
    questions: JSON.parse(questions),
    userId: userid,
    finalized: true,
    coverImage: getRandomInterviewCover(),
    createdAt: new Date().toISOString(),
  };

  await db.collection("interviews").add(interview);

  return { success: true, interview };
}

// Handle GET (debugging mode)
export async function GET() {
  try {
    // Provide default values for quick browser testing
    const result = await runInterviewGeneration({
      type: "technical",
      role: "Frontend Engineer",
      level: "mid",
      techstack: "React,Next.js",
      amount: 3,
      userid: "debug-user",
    });

    return Response.json(result, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false, error: String(error) }, { status: 500 });
  }
}

// Handle POST (normal usage)
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = await runInterviewGeneration(body);

    return Response.json(result, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false, error: String(error) }, { status: 500 });
  }
}
