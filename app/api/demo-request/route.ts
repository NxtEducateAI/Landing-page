import { NextRequest, NextResponse } from "next/server";
import { demoFormSchema } from "@/lib/validations";
import { sendDemoRequestEmail } from "@/lib/mail";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedData = demoFormSchema.safeParse(body);

    if (!validatedData.success) {
      return NextResponse.json(
        {
          success: false,
          errors: validatedData.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const confirmationId = `NXTDEMO-${Math.floor(100000 + Math.random() * 900000)}`;

    // Dispatch email notification to specified email address
    const emailResult = await sendDemoRequestEmail(validatedData.data, confirmationId);

    return NextResponse.json(
      {
        success: true,
        message: "Your live school demonstration has been successfully requested.",
        confirmationId,
        emailDispatched: emailResult.success,
        emailSimulated: emailResult.simulated || false,
        details: {
          fullName: validatedData.data.fullName,
          schoolName: validatedData.data.schoolName,
          role: validatedData.data.role,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing demo request:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred while processing your request.",
      },
      { status: 500 }
    );
  }
}

