import Calculator from '@/components/Calculator';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8 space-y-2">
          <h1 className="text-3xl font-bold text-black dark:text-white">
            My First Calculator React Project
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            by Franz Domingo
          </p>
        </div>
        <Calculator />
      </div>
    </div>
  );
}
