"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { addMeeting, updateMeeting, deleteMeeting } from "@/lib/meetings-db";
import type { MeetingType, Hymn, SpeakerItem } from "@/lib/types";

function parseHymnString(input: string | null | undefined): Hymn {
  if (!input) return { number: 0, title: "" };
  const match = input.match(/^(\d+)\s*-\s*(.*)$/);
  if (match) {
    return { 
      number: parseInt(match[1], 10), 
      title: match[2].trim() 
    };
  }
  const numericCheck = parseInt(input, 10);
  if (!isNaN(numericCheck)) {
    return { number: numericCheck, title: "Hymn" };
  }
  return { number: 0, title: input.trim() };
}

const MeetingFormSchema = z.object({
  date: z.string().min(1, { message: "Meeting date is required." }),
  meetingType: z.enum(["regular", "testimony", "stake", "general"]).default("regular"),
  presiding: z.string().default(""),
  conducting: z.string().min(1, { message: "Conducting leader is required." }),
  announcements: z.string().optional().default(""),
  openingHymn: z.string().min(1, { message: "Opening hymn is required." }),
  openingPrayer: z.string().default(""),
  wardBusiness: z.string().optional().default(""),
  stakeBusiness: z.boolean().or(z.string().transform((v) => v === "true")).default(false),
  sacramentHymn: z.string().min(1, { message: "Sacrament hymn is required." }),
  speakers: z.string().optional().default(""),
  closingHymn: z.string().min(1, { message: "Closing hymn is required." }),
  closingPrayer: z.string().default(""),
});

export type FormState = {
  message?: string | null;
  errors?: { [key: string]: string[] };
};

export async function createMeetingAction(prevState: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = MeetingFormSchema.safeParse({
    date: formData.get("date"),
    meetingType: formData.get("meetingType"),
    presiding: formData.get("presiding"),
    conducting: formData.get("conducting"),
    announcements: formData.get("announcements"),
    openingHymn: formData.get("openingHymn"),
    openingPrayer: formData.get("openingPrayer"),
    wardBusiness: formData.get("wardBusiness"),
    stakeBusiness: formData.get("stakeBusiness") === "on" || formData.get("stakeBusiness") === "true",
    sacramentHymn: formData.get("sacramentHymn"),
    speakers: formData.get("speakers"),
    closingHymn: formData.get("closingHymn"),
    closingPrayer: formData.get("closingPrayer"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Meeting.",
    };
  }

  const raw = validatedFields.data;

  const speakersArray = raw.speakers ? raw.speakers.split("\n").map(s => {
    const line = s.trim();
    if (!line) return null;

    let explicitType: 'speaker' | 'musical-number' = 'speaker';
    let processedLine = line;

    if (/^music:/i.test(line)) {
      explicitType = 'musical-number';
      processedLine = line.replace(/^music:/i, '').trim();
    } else if (/^speaker:/i.test(line)) {
      explicitType = 'speaker';
      processedLine = line.replace(/^speaker:/i, '').trim();
    }

    const [name, topic] = processedLine.split("-").map(p => p.trim());
    return { 
      name: name || "Speaker/Group", 
      topic: topic || "Gospel Topic", 
      type: explicitType 
    };
  }).filter((item): item is SpeakerItem => item !== null) : [];

  try {
    await addMeeting({
      date: raw.date,
      meetingType: raw.meetingType as MeetingType,
      presiding: raw.presiding,
      conducting: raw.conducting,
      announcements: raw.announcements ? raw.announcements.split("\n").map(s => s.trim()).filter(Boolean) : [],
      openingHymn: parseHymnString(raw.openingHymn),
      openingPrayer: raw.openingPrayer,
      wardBusiness: raw.wardBusiness ? raw.wardBusiness.split("\n").map(s => ({ description: s.trim() })).filter(b => b.description) : [],
      stakeBusiness: raw.stakeBusiness,
      sacramentHymn: parseHymnString(raw.sacramentHymn),
      speakers: speakersArray,
      closingHymn: parseHymnString(raw.closingHymn),
      closingPrayer: raw.closingPrayer,
    });
  } catch (error) {
    console.error("Database Error:", error);
    throw error;
  }

  revalidatePath("/meetings");
  redirect("/meetings");
}

export async function updateMeetingAction(id: number, prevState: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = MeetingFormSchema.safeParse({
    date: formData.get("date"),
    meetingType: formData.get("meetingType"),
    presiding: formData.get("presiding"),
    conducting: formData.get("conducting"),
    announcements: formData.get("announcements"),
    openingHymn: formData.get("openingHymn"),
    openingPrayer: formData.get("openingPrayer"),
    wardBusiness: formData.get("wardBusiness"),
    stakeBusiness: formData.get("stakeBusiness") === "on" || formData.get("stakeBusiness") === "true",
    sacramentHymn: formData.get("sacramentHymn"),
    speakers: formData.get("speakers"),
    closingHymn: formData.get("closingHymn"),
    closingPrayer: formData.get("closingPrayer"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Update Meeting.",
    };
  }

  const raw = validatedFields.data;

  const announcementsArray = raw.announcements ? raw.announcements.split("\n").map(s => s.trim()).filter(Boolean) : [];
  const wardBusinessArray = raw.wardBusiness ? raw.wardBusiness.split("\n").map(s => ({ description: s.trim() })).filter(b => b.description) : [];
  
  const speakersArray = raw.speakers ? raw.speakers.split("\n").map(s => {
    const line = s.trim();
    if (!line) return null;

    let explicitType: 'speaker' | 'musical-number' = 'speaker';
    let processedLine = line;

    if (/^music:/i.test(line)) {
      explicitType = 'musical-number';
      processedLine = line.replace(/^music:/i, '').trim();
    } else if (/^speaker:/i.test(line)) {
      explicitType = 'speaker';
      processedLine = line.replace(/^speaker:/i, '').trim();
    }

    const [name, topic] = processedLine.split("-").map(p => p.trim());
    return { 
      name: name || "Speaker/Group", 
      topic: topic || "Gospel Topic", 
      type: explicitType 
    };
  }).filter((item): item is SpeakerItem => item !== null) : [];

  try {
    await updateMeeting(id, {
      date: raw.date,
      meetingType: raw.meetingType as MeetingType,
      presiding: raw.presiding,
      conducting: raw.conducting,
      announcements: announcementsArray,
      openingHymn: parseHymnString(raw.openingHymn),
      openingPrayer: raw.openingPrayer,
      wardBusiness: wardBusinessArray,
      stakeBusiness: raw.stakeBusiness,
      sacramentHymn: parseHymnString(raw.sacramentHymn),
      speakers: speakersArray,
      closingHymn: parseHymnString(raw.closingHymn),
      closingPrayer: raw.closingPrayer,
    });
  } catch (error) {
    console.error("Database Error:", error);
    throw error;
  }

  revalidatePath("/meetings");
  redirect("/meetings");
}

export async function deleteMeetingAction(id: number) {
  try {
    await deleteMeeting(id);
    revalidatePath("/meetings");
  } catch (error) {
    console.error("Database Error:", error);
    throw error;
  }
}
