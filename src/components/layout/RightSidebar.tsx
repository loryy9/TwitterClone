import Link from "next/link";

// TODO: sostituire con dati reali
const topHashtags = [
  { name: "react", count: 1234 },
  { name: "nextjs", count: 1234 },
  { name: "tailwindcss", count: 1234 },
  { name: "typescript", count: 1234 },
  { name: "javascript", count: 1234 },
];

const topProfiles = [
  { id: 1, username: "alice", followeCount: "1234" },
  { id: 2, username: "bob", followeCount: "1234" },
  { id: 3, username: "charlie", followeCount: "1234" },
  { id: 4, username: "dave", followeCount: "1234" },
  { id: 5, username: "eve", followeCount: "1234" },
];

export default function RightSidebar() {
  return (
    <aside className="hidden h-screen w-1/4 overflow-y-auto p-4 md:sticky md:block xl:w-1/5">
      <section className="mb-4 rounded-lg bg-gray-100 p-4">
        <h2 className="mb-2 text-xl font-bold">{`Cosa è successo?`}</h2>
        <ul>
          {topHashtags.map((hashtag) => (
            <li key={hashtag.name}>
              <Link
                href={`/exlore?h=${hashtag.name}`}
                className="text-blue-500 hover:underline"
              >
                #{hashtag.name}
              </Link>
              <div className="text-gray-500">({hashtag.count})</div>
            </li>
          ))}
        </ul>
      </section>
      <section className="mb-4 rounded-lg bg-gray-100 p-4">
        <h2 className="mb-2 text-xl font-bold">{`Chi seguire?`}</h2>
        <ul>
          {topProfiles.map((profile) => (
            <li key={profile.id}>
              <Link
                href={`/profile/${profile.username}`}
                className="text-blue-500 hover:underline"
              >
                {profile.username}
              </Link>
              <div className="text-gray-500">({profile.followeCount})</div>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}
