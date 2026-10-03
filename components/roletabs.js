import { ROLES } from '@/lib/roles';

export default function RoleTabs({ value, onChange }) {
  return (
    <div className="mb-6 grid grid-cols-4 gap-1 rounded-lg bg-gray-900 p-1" role="tablist" aria-label="Account type">
      {Object.entries(ROLES).map(([key, role]) => (
        <button
          key={key}
          type="button"
          role="tab"
          aria-selected={value === key}
          onClick={() => onChange(key)}
          className={`rounded-md px-1 py-2 text-xs font-medium transition sm:px-2 sm:text-sm ${
            value === key ? 'bg-blue-600 text-white shadow' : 'text-gray-400 hover:text-white'
          }`}>
          {role.label}
        </button>
      ))}
    </div>
  );
}
