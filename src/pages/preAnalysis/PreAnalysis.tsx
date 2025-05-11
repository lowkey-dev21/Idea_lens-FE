import Radio from '../../components/radio/Radio'
import { useState } from 'react';

interface FormData {
  projectName: string;
  projectDescription: string;
  targetAudience: string;
  budget: string;
  timeline: string;
  references: string[];
  similarWebsites: string[];
  projectFiles: File[];
  additionalNotes: string;
}

const PreAnalysis = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    projectName: '',
    projectDescription: '',
    targetAudience: '',
    budget: '',
    timeline: '',
    references: [],
    similarWebsites: [],
    projectFiles: [],
    additionalNotes: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setFormData(prev => ({
      ...prev,
      projectFiles: [...prev.projectFiles, ...files]
    }));
  };

  const handleArrayInput = (name: keyof FormData, value: string) => {
    if (value.trim()) {
      setFormData(prev => ({
        ...prev,
        [name]: [...(prev[name] as string[]), value.trim()]
      }));
    }
  };

  const removeItem = (name: keyof FormData, index: number) => {
    setFormData(prev => ({
      ...prev,
      [name]: (prev[name] as any[]).filter((_, i) => i !== index)
    }));
  };

  const handleNext = () => {
    if (currentStep < 8) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    if (currentStep < 8) {
      setCurrentStep(currentStep + 1);
      const fieldName = getFieldNameByStep(currentStep);
      setFormData(prev => ({
        ...prev,
        [fieldName]: Array.isArray(prev[fieldName]) ? [] : ''
      }));
    }
  };

  const getFieldNameByStep = (step: number): keyof FormData => {
    switch (step) {
      case 1: return 'projectName';
      case 2: return 'projectDescription';
      case 3: return 'targetAudience';
      case 4: return 'budget';
      case 5: return 'timeline';
      case 6: return 'similarWebsites';
      case 7: return 'projectFiles';
      case 8: return 'additionalNotes';
      default: return 'projectName';
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              Project Basics
            </h2>
            <input
              type="text"
              name="projectName"
              placeholder="What's your project name?"
              value={formData.projectName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-md 
                border border-zinc-200 dark:border-zinc-800 
                bg-white dark:bg-zinc-900
                text-zinc-900 dark:text-zinc-50
                placeholder-zinc-500 dark:placeholder-zinc-400
                focus:outline-none focus:ring-2 
                focus:ring-zinc-800 dark:focus:ring-zinc-200 
                focus:border-transparent transition-all"
            />
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              Project Description
            </h2>
            <textarea
              name="projectDescription"
              placeholder="Describe your project idea..."
              value={formData.projectDescription}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-md 
                border border-zinc-200 dark:border-zinc-800 
                bg-white dark:bg-zinc-900
                text-zinc-900 dark:text-zinc-50
                placeholder-zinc-500 dark:placeholder-zinc-400
                focus:outline-none focus:ring-2 
                focus:ring-zinc-800 dark:focus:ring-zinc-200 
                focus:border-transparent transition-all resize-vertical"
            />
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              Target Audience
            </h2>
            <input
              type="text"
              name="targetAudience"
              placeholder="Who is your target audience?"
              value={formData.targetAudience}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-md 
                border border-zinc-200 dark:border-zinc-800 
                bg-white dark:bg-zinc-900
                text-zinc-900 dark:text-zinc-50
                placeholder-zinc-500 dark:placeholder-zinc-400
                focus:outline-none focus:ring-2 
                focus:ring-zinc-800 dark:focus:ring-zinc-200 
                focus:border-transparent transition-all"
            />
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              Budget
            </h2>
            <input
              type="text"
              name="budget"
              placeholder="What's your estimated budget?"
              value={formData.budget}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-md 
                border border-zinc-200 dark:border-zinc-800 
                bg-white dark:bg-zinc-900
                text-zinc-900 dark:text-zinc-50
                placeholder-zinc-500 dark:placeholder-zinc-400
                focus:outline-none focus:ring-2 
                focus:ring-zinc-800 dark:focus:ring-zinc-200 
                focus:border-transparent transition-all"
            />
          </div>
        );
      case 5:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              Timeline
            </h2>
            <input
              type="text"
              name="timeline"
              placeholder="What's your expected timeline?"
              value={formData.timeline}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-md 
                border border-zinc-200 dark:border-zinc-800 
                bg-white dark:bg-zinc-900
                text-zinc-900 dark:text-zinc-50
                placeholder-zinc-500 dark:placeholder-zinc-400
                focus:outline-none focus:ring-2 
                focus:ring-zinc-800 dark:focus:ring-zinc-200 
                focus:border-transparent transition-all"
            />
          </div>
        );
      case 6:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              Similar Websites
            </h2>
            <div className="space-y-2">
              <input
                type="url"
                placeholder="Enter website URL"
                className="w-full px-4 py-3 rounded-md 
                border border-zinc-200 dark:border-zinc-800 
                bg-white dark:bg-zinc-900
                text-zinc-900 dark:text-zinc-50
                placeholder-zinc-500 dark:placeholder-zinc-400
                focus:outline-none focus:ring-2 
                focus:ring-zinc-800 dark:focus:ring-zinc-200 
                focus:border-transparent transition-all"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleArrayInput('similarWebsites', (e.target as HTMLInputElement).value);
                    (e.target as HTMLInputElement).value = '';
                  }
                }}
              />
              <div className="flex flex-wrap gap-2">
                {formData.similarWebsites.map((url, index) => (
                  <div key={index} 
                    className="flex items-center gap-2 px-3 py-1 rounded-full 
                      bg-zinc-100 dark:bg-zinc-800">
                    <span className="text-sm">{url}</span>
                    <button
                      onClick={() => removeItem('similarWebsites', index)}
                      className="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 7:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              Project Files
            </h2>
            <div className="space-y-4">
              <div className="flex flex-col items-center justify-center h-[250px] p-6 border-2 border-dashed
                border-zinc-200 dark:border-zinc-800 rounded-lg">
                <input
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                  accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                />
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer text-zinc-500 dark:text-zinc-400 hover:text-zinc-700"
                >
                  Drop files here or click to upload
                </label>
              </div>
              <div className="space-y-2">
                {formData.projectFiles.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-2 
                    bg-zinc-50 dark:bg-zinc-900 rounded-md">
                    <span className="text-sm">{file.name}</span>
                    <button
                      onClick={() => removeItem('projectFiles', index)}
                      className="text-zinc-500 hover:text-red-500"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 8:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              Additional Notes
            </h2>
            <textarea
              name="additionalNotes"
              placeholder="Any additional information or requirements..."
              value={formData.additionalNotes}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-md min-h-[150px]
                border border-zinc-200 dark:border-zinc-800 
                bg-white dark:bg-zinc-900
                text-zinc-900 dark:text-zinc-50
                placeholder-zinc-500 dark:placeholder-zinc-400
                focus:outline-none focus:ring-2 
                focus:ring-zinc-800 dark:focus:ring-zinc-200 
                focus:border-transparent transition-all resize-vertical"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="max-w-2xl mx-auto p-6 space-y-8 
      bg-white dark:bg-zinc-950 min-h-screen transition-colors"
    >
      
        <Radio
          totalSteps={8}
          currentStep={currentStep}
          onStepChange={setCurrentStep}
        />
     
      {currentStep > 5 && (
        <div className="text-center text-sm text-zinc-500 dark:text-zinc-400 mt-2">
          Steps 6-8
        </div>
      )}
      <div className="mt-8">{renderStepContent()}</div>
      <div className="flex justify-center items-center gap-3 mt-8">
        {currentStep > 1 && (
          <button
            className="px-4 py-2 rounded-md 
              border border-zinc-200 dark:border-zinc-800 
              text-zinc-900 dark:text-zinc-50 
              hover:bg-zinc-100 dark:hover:bg-zinc-800 
              transition-colors"
            onClick={handlePrevious}
          >
            Previous
          </button>
        )}
        <button
          className="px-4 py-2 rounded-md 
            border border-zinc-200 dark:border-zinc-800 
            text-zinc-700 dark:text-zinc-400 
            hover:bg-zinc-100 dark:hover:bg-zinc-800 
            transition-colors"
          onClick={handleSkip}
        >
          Skip
        </button>
        <button
          className="px-4 py-2 rounded-md 
            bg-zinc-900 dark:bg-white 
            text-white dark:text-zinc-900 
            hover:bg-zinc-800 dark:hover:bg-zinc-100 
            transition-colors"
          onClick={handleNext}
        >
          {currentStep === 8 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default PreAnalysis;