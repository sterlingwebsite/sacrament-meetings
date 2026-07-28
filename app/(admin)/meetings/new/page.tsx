"use client";

import { useActionState, useEffect } from "react";
import Link from "next/link";
import { createMeetingAction, FormState } from "@/lib/actions";

const initialState: FormState = { message: null, errors: {} };

export default function NewMeetingPage() {
  const [state, formAction, isPending] = useActionState(createMeetingAction, initialState);

  useEffect(() => {
    document.title = "Create Meeting Planner | Sacrament Planner";
  }, []);

  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 space-y-6">
        
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Create Sacrament Meeting Planner
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Fill out any combination of fields below to build your meeting schedule program.
          </p>
        </div>

        {state.message && (
          <div className="p-4 text-sm font-medium text-red-600 bg-red-50 dark:bg-red-950/30 rounded-xl border border-red-100">
            {state.message}
          </div>
        )}

        <form action={formAction} className="space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            <div>
              <label htmlFor="date" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Meeting Date *</label>
              <input type="date" id="date" name="date" className="w-full h-10 px-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-blue-500" />
              <div className="text-red-500 text-xs mt-1">{state.errors?.date?.[0]}</div>
            </div>

            <div>
              <label htmlFor="meetingType" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Meeting Type</label>
              <select id="meetingType" name="meetingType" defaultValue="regular" className="w-full h-10 px-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-slate-100 outline-none">
                <option value="regular">Regular Sacrament</option>
                <option value="testimony">Fast & Testimony</option>
                <option value="stake">Stake Conference</option>
                <option value="general">General Conference</option>
              </select>
            </div>

            <div>
              <label htmlFor="presiding" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Presiding Authority</label>
              <input type="text" id="presiding" name="presiding" placeholder="e.g., Bishop Smith" className="w-full h-10 px-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-blue-500" />
            </div>

            <div>
              <label htmlFor="conducting" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Conducting Leader *</label>
              <input type="text" id="conducting" name="conducting" placeholder="e.g., Brother Jones" className="w-full h-10 px-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-blue-500" />
              <div className="text-red-500 text-xs mt-1">{state.errors?.conducting?.[0]}</div>
            </div>

            <div>
              <label htmlFor="openingHymn" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Opening Hymn *</label>
              <input type="text" id="openingHymn" name="openingHymn" placeholder="e.g., 2 - The Spirit of God" className="w-full h-10 px-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-blue-500" />
              <div className="text-red-500 text-xs mt-1">{state.errors?.openingHymn?.[0]}</div>
            </div>

            <div>
              <label htmlFor="openingPrayer" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Opening Prayer By</label>
              <input type="text" id="openingPrayer" name="openingPrayer" placeholder="Name" className="w-full h-10 px-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-blue-500" />
            </div>

            <div>
              <label htmlFor="sacramentHymn" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Sacrament Hymn *</label>
              <input type="text" id="sacramentHymn" name="sacramentHymn" placeholder="e.g., 169 - As Now We Take" className="w-full h-10 px-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-blue-500" />
              <div className="text-red-500 text-xs mt-1">{state.errors?.sacramentHymn?.[0]}</div>
            </div>

            <div>
              <label htmlFor="closingHymn" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Closing Hymn *</label>
              <input type="text" id="closingHymn" name="closingHymn" placeholder="e.g., 241 - Count Your Blessings" className="w-full h-10 px-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-blue-500" />
              <div className="text-red-500 text-xs mt-1">{state.errors?.closingHymn?.[0]}</div>
            </div>

            <div>
              <label htmlFor="closingPrayer" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Closing Prayer By</label>
              <input type="text" id="closingPrayer" name="closingPrayer" placeholder="Name" className="w-full h-10 px-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-blue-500" />
            </div>

            <div className="flex items-center space-x-3 pt-6">
              <input type="checkbox" id="stakeBusiness" name="stakeBusiness" className="w-4 h-4 text-blue-600 rounded" />
              <label htmlFor="stakeBusiness" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Is Stake Business Conducted?</label>
            </div>

          </div>

          <div className="space-y-4 pt-2">
            <div>
              <label htmlFor="announcements" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Announcements (One per line)</label>
              <textarea id="announcements" name="announcements" rows={3} className="w-full p-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-blue-500" />
            </div>

            <div>
              <label htmlFor="wardBusiness" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Ward Business Actions (One per line)</label>
              <textarea id="wardBusiness" name="wardBusiness" rows={3} className="w-full p-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-blue-500" />
            </div>

            <div>
              <label htmlFor="speakers" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Speakers & Musical Numbers Program Lineup (Speaker: Name - Topic or Music: Name - Song)
              </label>
              <textarea 
                id="speakers" 
                name="speakers" 
                placeholder={`Speaker: Brother Santos - Temple Covenants\nMusic: Ward Choir - Consider the Lilies`}
                rows={6} 
                className="w-full p-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-blue-500" 
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            <Link href="/meetings" className="inline-flex h-10 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 transition-colors">
              Cancel
            </Link>
            <button type="submit" disabled={isPending} className="inline-flex h-10 items-center justify-center rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white shadow-lg shadow-blue-500/10 hover:bg-blue-700 transition-all disabled:opacity-50">
              {isPending ? "Saving..." : "Create Planner"}
            </button>
          </div>

        </form>
      </div>
    </main>
  );
}
