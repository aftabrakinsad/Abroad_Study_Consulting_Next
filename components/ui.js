// Small shared building blocks so every page uses the same spacing, colors and form styles

export const inputClass =
  'block w-full rounded-lg border border-gray-600 bg-gray-700 px-3 py-2.5 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40';

export function Card({ className = '', children }) {
  return (
    <div className={`rounded-xl border border-gray-700 bg-gray-800 shadow-lg ${className}`}>
      {children}
    </div>
  );
}

export function PageHeader({ title, subtitle }) {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold text-white">{title}</h1>
      {subtitle && <p className="mt-1 text-sm text-gray-400">{subtitle}</p>}
    </div>
  );
}

export function Field({ label, name, error, as = 'input', ...props }) {
  const Tag = as;
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-gray-200">
        {label}
      </label>
      <Tag
        id={name}
        name={name}
        className={`${inputClass} ${error ? 'border-red-500' : ''} ${props.readOnly ? 'cursor-not-allowed opacity-60' : ''}`}
        {...props}
      />
      {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
    </div>
  );
}

export function Button({ className = '', variant = 'primary', ...props }) {
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500/50',
    secondary: 'border border-gray-600 bg-gray-800 text-gray-100 hover:bg-gray-700 focus:ring-gray-500/50',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500/50',
  };
  return (
    <button
      className={`inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium transition focus:outline-none focus:ring-4 disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${className}`}
      {...props}
    />
  );
}

export function Alert({ type = 'success', children }) {
  if (!children) return null;
  const styles = {
    success: 'border-green-700 bg-green-900/40 text-green-300',
    error: 'border-red-700 bg-red-900/40 text-red-300',
    info: 'border-blue-700 bg-blue-900/40 text-blue-200',
  };
  return <div className={`rounded-lg border px-4 py-3 text-sm ${styles[type]}`}>{children}</div>;
}

// The NestJS API reports validation problems as { message }, sometimes as an array
export function errorMessage(error, fallback = 'Something went wrong. Please try again.') {
  const message = error?.response?.data?.message;
  if (Array.isArray(message)) return message.join(', ');
  return message || (error?.response ? fallback : 'Server unreachable. Please try again in a moment.');
}

// Same password rule the backend DTOs use
export const STRONG_PASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
export const EMAIL = /\S+@\S+\.\S+/;

export const APPLICATION_STATUSES = ['Submitted', 'In Review', 'Documents Needed', 'Accepted', 'Rejected'];

const statusStyles = {
  Submitted: 'bg-gray-500/20 text-gray-200',
  'In Review': 'bg-blue-500/20 text-blue-300',
  'Documents Needed': 'bg-amber-500/20 text-amber-300',
  Accepted: 'bg-green-500/20 text-green-300',
  Rejected: 'bg-red-500/20 text-red-300',
};

export function StatusBadge({ status }) {
  return (
    <span className={`inline-block whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[status] || statusStyles.Submitted}`}>
      {status}
    </span>
  );
}

export function formatDate(value) {
  return new Date(value).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}
