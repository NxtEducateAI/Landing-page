import { z } from "zod";

export const demoFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(80, "Full name is too long"),
  email: z
    .string()
    .email("Please provide a valid institutional email address")
    .refine((val) => !val.endsWith("@gmail.com") && !val.endsWith("@yahoo.com") && !val.endsWith("@hotmail.com"), {
      message: "Please provide an official school or organization email address",
    }),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[+0-9\s\-()]+$/, "Please enter a valid phone number format"),
  schoolName: z
    .string()
    .min(3, "School / Institution name must be at least 3 characters"),
  city: z
    .string()
    .min(2, "City name is required"),
  studentCount: z.enum(["<500", "500-2000", "2000+"], {
    errorMap: () => ({ message: "Please select student population size" }),
  }),
  role: z.enum(["Principal", "Trustee", "IT Head", "Admin"], {
    errorMap: () => ({ message: "Please select your institutional role" }),
  }),
});

export type DemoFormData = z.infer<typeof demoFormSchema>;
