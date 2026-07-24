"use client";

import { useActionState } from "react";
import Link from "next/link"; 
import { updateMeetingAction, FormState } from "@/lib/actions";

interface WrapperProps {
  id: number;
  defaultValues: {
    date: string;
    meetingType: string;
    presiding: string;
    conducting: string;
    announcements: string;
    openingHymn: string;
    openingPrayer: string;
    wardBusiness: string;
    stakeBusiness: boolean;
    sacramentHymn: string;
    speakers: string;
    closingHymn: string;
    closingPrayer: string;
  };
}

const initialState: FormState = { message: null, errors: {} };

export default function EditFormWrapper({ id, defaultValues }: WrapperProps) {
  const updateMeetingWithId = updateMeetingAction.bind(null, id);
  const [state, formAction, isPending] = useActionState(updateMeetingWithId, initialState);

  return (
    <form action={formAction} className="space-y-6">
      
      {state.message && (
        <div className="p-4 text-sm font-medium text-red-600 bg-red-50 rounded-xl border border-red-100">
          {state.message}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="date" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Meeting Date</label>
          <input 
            type="date" 
            id="date" 
            name="date" 
            defaultValue={defaultValues.date} 
            aria-describedby="date-error"
            className="w-full h-10 px-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent text-sm" 
          />
          <div id="date-error" aria-live="polite" className="text-red-500 text-xs mt-1">{state.errors?.date?.[0]}</div>
        </div>

        <div>
          <label htmlFor="meetingType" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Meeting Type</label>
          <select id="meetingType" name="meetingType" defaultValue={defaultValues.meetingType} className="w-full h-10 px-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-900 text-sm">
            <option value="regular">Regular Sacrament</option>
            <option value="testimony">Fast & Testimony</option>
            <option value="stake">Stake Conference</option>
            <option value="general">General Conference</option>
          </select>
        </div>

        <div>
          <label htmlFor="presiding" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Presiding</label>
          <input type="text" id="presiding" name="presiding" defaultValue={defaultValues.presiding} placeholder="e.g., Stake President Nelson" className="w-full h-10 px-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent text-sm" />
          <div className="text-red-500 text-xs mt-1">{state.errors?.presiding?.[0]}</div>
        </div>

        <div>
          <label htmlFor="conducting" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Conducting</label>
          <input 
            type="text" 
            id="conducting" 
            name="conducting" 
            defaultValue={defaultValues.conducting} 
            aria-describedby="conducting-error"
            className="w-full h-10 px-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent text-sm" 
          />
          <div id="conducting-error" aria-live="polite" className="text-red-500 text-xs mt-1">{state.errors?.conducting?.[0]}</div>
        </div>

        <div>
          <label htmlFor="openingHymn" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Opening Hymn</label>
          <input 
            type="text" 
            id="openingHymn" 
            name="openingHymn" 
            defaultValue={defaultValues.openingHymn} 
            aria-describedby="openingHymn-error"
            className="w-full h-10 px-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent text-sm" 
          />
          <div id="openingHymn-error" aria-live="polite" className="text-red-500 text-xs mt-1">{state.errors?.openingHymn?.[0]}</div>
        </div>

        <div>
          <label htmlFor="openingPrayer" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Opening Prayer By</label>
          <input type="text" id="openingPrayer" name="openingPrayer" defaultValue={defaultValues.openingPrayer} className="w-full h-10 px-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent text-sm" />
          <div className="text-red-500 text-xs mt-1">{state.errors?.openingPrayer?.[0]}</div>
        </div>

        <div>
          <label htmlFor="sacramentHymn" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Sacrament Hymn</label>
          <input 
            type="text" 
            id="sacramentHymn" 
            name="sacramentHymn" 
            defaultValue={defaultValues.sacramentHymn} 
            aria-describedby="sacramentHymn-error"
            className="w-full h-10 px-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent text-sm" 
          />
          <div id="sacramentHymn-error" aria-live="polite" className="text-red-500 text-xs mt-1">{state.errors?.sacramentHymn?.[0]}</div>
        </div>

        <div>
          <label htmlFor="closingHymn" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Closing Hymn</label>
          <input 
            type="text" 
            id="closingHymn" 
            name="closingHymn" 
            defaultValue={defaultValues.closingHymn} 
            aria-describedby="closingHymn-error"
            className="w-full h-10 px-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent text-sm" 
          />
          <div id="closingHymn-error" aria-live="polite" className="text-red-500 text-xs mt-1">{state.errors?.closingHymn?.[0]}</div>
        </div>

        <div>
          <label htmlFor="closingPrayer" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Closing Prayer By</label>
          <input type="text" id="closingPrayer" name="closingPrayer" defaultValue={defaultValues.closingPrayer} className="w-full h-10 px-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent text-sm" />
          <div className="text-red-500 text-xs mt-1">{state.errors?.closingPrayer?.[0]}</div>
        </div>

        <div className="flex items-center space-x-3 pt-6">
          <input type="checkbox" id="stakeBusiness" name="stakeBusiness" defaultChecked={defaultValues.stakeBusiness} className="w-4 h-4 text-blue-600 rounded" />
          <label htmlFor="stakeBusiness" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Is Stake Business Conducted?</label>
        </div>
      </div>

      {/* RESTORED: Added missing text area elements so forms map properly */}
      <div className="space-y-4 pt-2">
        <div>
          <label htmlFor="announcements" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Announcements (One per line)</label>
          <textarea id="announcements" name="announcements" defaultValue={defaultValues.announcements} rows={3} className="w-full p-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent text-sm text-slate-900 dark:text-slate-100 outline-none" />
          <div className="text-red-500 text-xs mt-1">{state.errors?.announcements?.[0]}</div>
        </div>

        <div>
          <label htmlFor="wardBusiness" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Ward Business Actions (One per line)</label>
          <textarea id="wardBusiness" name="wardBusiness" defaultValue={defaultValues.wardBusiness} rows={3} className="w-full p-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent text-sm text-slate-900 dark:text-slate-100 outline-none" />
          <div className="text-red-500 text-xs mt-1">{state.errors?.wardBusiness?.[0]}</div>
        </div>

        <div>
          <label htmlFor="speakers" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
            Speakers & Musical Numbers Program Lineup (Speaker: Name - Topic or Music: Name - Song)
          </label>
          <textarea 
            id="speakers" 
            name="speakers" 
            defaultValue={defaultValues.speakers} 
            placeholder={`Speaker: Brother Santos - Temple Covenants\nMusic: Ward Choir - Consider the Lilies`}
            rows={6} 
            className="w-full p-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 outline-none focus:border-blue-500" 
          />
          <div className="text-red-500 text-xs mt-1">{state.errors?.speakers?.[0]}</div>
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
        <Link href="/meetings" className="h-10 px-4 inline-flex items-center justify-center rounded-lg border border-slate-300 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 transition-colors">
          Cancel
        </Link>
        <button 
          type="submit" 
          disabled={isPending} 
          className="h-10 px-4 inline-flex items-center justify-center rounded-lg bg-green-600 font-semibold text-white hover:bg-green-700 disabled:bg-slate-300 cursor-pointer transition-colors"
        >
          {isPending ? "Saving Updates..." : "Save Full Agenda"}
        </button>
      </div>

    </form>
  );
}
