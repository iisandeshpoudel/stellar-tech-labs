import { Loader2 } from 'lucide-react';

const LoadingSpinner = ({ size = 8, color = "text-stellar-teal", message = "" }) => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
      <Loader2 className={`w-${size} h-${size} ${color} animate-spin`} />
      {message && (
        <p className="text-lg text-gray-400 font-medium">{message}</p>
      )}
    </div>
  );
};

export default LoadingSpinner;
