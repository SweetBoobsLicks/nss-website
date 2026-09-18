"use client";

import { useMemo, useState } from "react";

const squads = [
  { name: "Volunteer Team A", members: 18, attendance: 94 },
  { name: "Volunteer Team B", members: 15, attendance: 89 },
  { name: "Volunteer Team C", members: 20, attendance: 91 },
];

const attendance = [
  { name: "Aman", status: "Present", tone: "emerald" },
  { name: "Riya", status: "Late", tone: "yellow" },
  { name: "Neha", status: "Absent", tone: "red" },
  { name: "Sahil", status: "Present", tone: "emerald" },
];

export function LeaderSquadBoard() {
  const [selectedTeam, setSelectedTeam] = useState(squads[0].name);

  const currentTeam = useMemo(
    () => squads.find((team) => team.name === selectedTeam) ?? squads[0],
    [selectedTeam]
  );

  return (
    <div className="mt-6 grid gap-4 lg:grid-cols-2">
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
        <h4 className="mb-4 text-lg font-semibold">Assigned Squad</h4>
        <div className="space-y-3">
          {squads.map((team) => (
            <button
              key={team.name}
              type="button"
              onClick={() => setSelectedTeam(team.name)}
              className={`w-full rounded-xl px-3 py-3 text-left transition ${
                selectedTeam === team.name ? "bg-emerald-500/15 ring-1 ring-emerald-500" : "bg-slate-800"
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{team.name}</span>
                <span className="text-xs text-slate-300">{team.members} members</span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-700">
                <div className="h-full rounded-full bg-emerald-400" style={{ width: `${team.attendance}%` }} />
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
        <h4 className="mb-4 text-lg font-semibold">Attendance</h4>
        <div className="mb-3 rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-300">
          Selected squad: <span className="font-medium text-white">{currentTeam.name}</span>
        </div>
        <div className="space-y-3">
          {attendance.map((person) => (
            <div key={person.name} className="flex items-center justify-between rounded-xl bg-slate-800 px-3 py-2">
              <span>{person.name}</span>
              <span
                className={
                  person.tone === "emerald"
                    ? "text-emerald-400"
                    : person.tone === "yellow"
                      ? "text-yellow-400"
                      : "text-red-400"
                }
              >
                {person.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
